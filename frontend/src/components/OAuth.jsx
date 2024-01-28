import { Button } from "flowbite-react";
import { ImGoogle3 } from "react-icons/im";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";

const OAuth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const auth = getAuth(app);
    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        // provider.setCustomParameters({ prompt: 'select_account' });

        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            const res = await fetch ('api/auth/google' , {
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({
                    name : resultsFromGoogle.user.displayName,
                    email : resultsFromGoogle.user.email,
                    googlePhotoUrl : resultsFromGoogle.user.photoURL
                })
            })
            const data = await res.json();
            if (res.ok){
                dispatch(signInSuccess(data));
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Button className="bg-gray-800 font-bold" outline type='button' onClick={handleGoogleClick}>
            <ImGoogle3 className="mr-3 text-lg" />
            Continue With Google
        </Button>
    );
}

export default OAuth;
