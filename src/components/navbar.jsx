import React from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Navibar(){

    const navigate = useNavigate()

    const LoginAvatar = (props) => {
        if (Cookies.get('token') !== undefined) {
            return (
                <>
                    <Link to="/dashboard" className="text-black bg-blue-100 hover:bg-blue-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2">Dashboard</Link>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center" onClick={() => {
                        Cookies.remove('token')
                        Cookies.remove('user')
                        navigate('/sign-in')
                    }}>Sign out</button>
                </>
            )
        } else if (Cookies.get('token') === undefined) {
            return (
                <>
                    <Link to="/sign-in" className="text-black bg-blue-100 hover:bg-blue-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2">Sign in</Link>
                    <Link to="/sign-up" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center">Sign up</Link>
                </>
                
            )
        }
    }

    return(
        <>
            <Navbar fluid={true} className="container">
                <Navbar.Brand href="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        SanberJobs
                    </span>
                </Navbar.Brand>
                    <div className="md:block hidden md:order-2">
                        {LoginAvatar()}
                    </div>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <div className="block md:hidden md:order-2">
                        {LoginAvatar()}
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}