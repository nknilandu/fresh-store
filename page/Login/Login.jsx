import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const { b, googleSign, authSignOut } = useContext(AuthContext)

    const [userX, setUSerX] = useState(null)

    const handleGoogleSign = () => {
        console.log(b)

        googleSign().then((res)=>{
            //success
            console.log(res.user.displayName)
            setUSerX(res.user)
            
        }).catch((e)=>{
            //error
            console.log(e)
        })

    }


    console.log(userX)





    const handleSignOut = () => {
        authSignOut().then(()=> {
            //success
            console.log("Log out Success")
        }).catch((e)=> {
            console.log(e)
        })
    }


    return (
        <div className='max-w-5xl mx-auto text-black'>
            <img src={userX?.photoURL} alt="" />
            <p>{userX?.displayName}</p>
            <p>{userX?.email}</p>
             <button onClick={handleGoogleSign} className="btn bg-[#10b981] border-0 rounded-full px-5"><FaGoogle /> Sign in with Google </button>
             <button onClick={handleSignOut} className="btn bg-[#10b981] border-0 rounded-full px-5 ml-5">Sign Out </button>
        </div>
    );
};

export default Login;