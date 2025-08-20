import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const FormSignIn = () => {
    const navigate = useNavigate();

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [newUser,setNewUser] = useState({})
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    console.log(newUser);
    
    


    const handleSubmit = (e) => {
        e.preventDefault()
        const user = { email, password };
        setNewUser(user)
        axios.post('http://localhost:3000/logIn', user)
        .then(result => {
            const data = result.data;
            console.log(data);
            setSuccessMessage("Connected successfully ");
            setErrorMessage('');
            if (data.userId) {
                localStorage.setItem("userId", data.userId);
                navigate('/home');
            } else {
                navigate('/signIn');
            }
            
            
        })
            .catch(err => {
            console.log(err);
            setErrorMessage("Cannot Connected");
            setSuccessMessage('');
        });


        setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
        }, 3000); 
    }

  return (
     <div className='flex flex-col gap-2'>
        <div className=' w-full flex items-center'>
            <div className='w-full border-t-1 border-gray-300'></div>
            <div className='text-gray-300 text-md mb-1'><span>or</span></div>
            <div className='w-full border-t-1 border-gray-300'></div>
        </div>
        <div>
            <form onSubmit={handleSubmit} action="">
                <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold'>Email*</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter your email' className='border-1 border-gray-300 w-full rounded-lg p-3' type="text" />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold'>Password*</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter your password' className='border-1 border-gray-300 w-full rounded-lg p-3' type="password" />
                </div>
                <div className='w-full'>
                    <button type='submit' className='text-white font-semibold bg-black p-5 text-center rounded-lg hover:bg-gray-900 cursor-pointer transition-[100ms] w-full'>Sign in</button>
                </div>
                <div>
                    {successMessage && <p className="text-green-600 font-semibold">{successMessage}</p>}
                    {errorMessage && <p className="text-red-600 font-semibold">{errorMessage}</p>}
                </div>
                <div className='flex gap-1'>
                    <span>Not have an account? </span>
                    <span className='font-semibold'><Link to ={"/signUp"}>Sign Up Here</Link></span>
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FormSignIn
