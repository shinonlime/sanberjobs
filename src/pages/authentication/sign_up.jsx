import React, {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function SignUp(){
    const [input, setInput] = useState({
        name : "",
        img : "https://cdn-icons-png.flaticon.com/512/18/18148.png",
        email : "",
        password : "",
    })
    
    const handleChange = (event) => {
        
        let value = event.target.value
        let name = event.target.name

        setInput({...input, [name] : value})
    }

    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault()

        let {name, img, email, password} = input

        axios.post("https://dev-example.sanbercloud.com/api/register", {name, img, email, password})
        .then((res) => {
            let {token} = res.data
            Cookies.set('token', token)
            navigate('/dashboard')
        })
    }

    return(
        <>
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl">Welcome to SanberJobs</h1>
                </div>

                <form onSubmit={handleSubmit} action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div>
                        <label for="name" class="sr-only">Name</label>
                        <div class="relative">
                            <input onChange={handleChange} value={input.name} name="name" type="text" id="name" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            
                            <label for="name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
                        </div>
                    </div>

                    <div>
                        <label for="email" class="sr-only">Email</label>
                        <div class="relative">
                            <input onChange={handleChange} value={input.email} name="email" type="text" id="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

                            <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                        </div>
                    </div>

                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <div class="relative">
                            <input onChange={handleChange} value={input.password} name="password" type="password" id="password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

                            <label for="password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <p class="text-sm text-gray-500">
                            Have an account? <a class="underline" href="/sign-in">Sign in</a>
                        </p>

                        <button className="inline-block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center transition active:scale-90">Sign up</button>
                    </div>
                </form>
            </div>
        </>
    )
}