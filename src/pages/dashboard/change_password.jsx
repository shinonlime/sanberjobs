import { TextInput, Label, Checkbox } from "flowbite-react";
import React, {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
    const [input, setInput] = useState({
        current_password : "",
        new_password  : "",
        new_confirm_password : ""
    })
    
    const handleChange = (event) => {
        
        let value = event.target.value
        let name = event.target.name

        setInput({...input, [name] : value})
    }

    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault()

        let {current_password, new_password, new_confirm_password} = input

        axios.post("https://dev-example.sanbercloud.com/api/change-password",
        {current_password, new_password, new_confirm_password},
        {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
        .then((res) => {
            navigate('/dashboard')
        })
        .catch((err) => {
            alert(err)})
    }

    return(
        <>
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl">Change Password</h1>
                </div>

                <form onSubmit={handleSubmit} class="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div>
                        <label for="email" class="sr-only">Email</label>
                        <div class="relative">
                            <input onChange={handleChange} value={input.current_password} type="password" id="current_password" name="current_password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

                            <label for="current_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Current Password</label>
                        </div>
                    </div>

                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <div class="relative">
                            <input onChange={handleChange} value={input.new_password} type="password" id="new_password" name="new_password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

                            <label for="new_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">New Password</label>
                        </div>
                    </div>

                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <div class="relative">
                            <input onChange={handleChange} value={input.new_confirm_password} type="password" id="new_confirm_password" name="new_confirm_password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

                            <label for="new_confirm_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Confirm New Password</label>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <button className="inline-block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center transition active:scale-90">Sign in</button>
                    </div>
                </form>
            </div>
        </>
    )
}