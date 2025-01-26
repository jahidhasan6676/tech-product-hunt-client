import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";


const CheckOutForm = () => {
    const [clientSecret, setClientSecret] = useState("");
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const price = parseInt(10);
    const navigate = useNavigate();

    useEffect(()=>{
        axiosSecure.post("/create-payment-intent",{price })
        .then(res =>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure,price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (!card) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log("payment error", error)
            toast.error(error.message)
        }
        else{
            console.log("payment method", paymentMethod)
        }

        // confirm payment
        const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: card,
                billing_details:{
                    email:user?.email || 'anonymous',
                    name:user?.displayName | 'anonymous'
                }
            }
        })

        if(confirmError){
            console.log("confirm error", confirmError)
        }
        else{
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                toast.success("Your payment successful")

                // now save the database
                const payment = {
                    email: user?.email,
                    price: price,
                    data: new Date(),
                    transactionId: paymentIntent.id,
                    status:paymentIntent.status,

                }

               const res = await axiosSecure.post("/payments", payment)
               if(res.data.insertedId){
                navigate("/dashboard/myProfile")
               }
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement>
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            '::placeholder': {
                                color: '#aab7c4'
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}


            </CardElement>
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret} >Pay</button>

        </form>
    );
};

export default CheckOutForm;