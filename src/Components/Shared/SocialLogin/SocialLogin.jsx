
import { toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { saveUser } from "../../../api/utils";


const SocialLogin = () => {
    const {signInGoogle, setUser} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleSignIn = async() =>{
      try{
        const result = await signInGoogle()
            console.log("google sign in", result.user);
            setUser(result.user);
            await saveUser(result?.user)
            navigate(location?.state ? location.state : "/")
            toast.success("Successfully Sing In")
      }catch (err){
        toast.error(err.message)
      }
        
        
    }
    return (
        <div>
            {/* Divider */}
            <div className="mt-6 flex items-center justify-center space-x-2">
                <span className="h-px w-24 bg-gray-300"></span>
                <span className="text-sm text-gray-500">or</span>
                <span className="h-px w-24 bg-gray-300"></span>
            </div>

            {/* Google Login */}
            <button
                onClick={handleGoogleSignIn}
                className="w-full mt-4 flex items-center justify-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
            >
                <img
                    src="https://img.icons8.com/color/48/google-logo.png"
                    alt="Google"
                    className="w-6 h-6 mr-2"
                />
                Continue with Google
            </button>
        </div>
    );
};

export default SocialLogin;