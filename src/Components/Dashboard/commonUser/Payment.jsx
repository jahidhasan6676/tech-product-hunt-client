import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)
const Payment = () => {
    return (
        <div className="py-20 px-5 md:px-10 lg:px-20">
            <h2 className="text-xl font-semibold text-center mb-10">Subscribe Payment</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;