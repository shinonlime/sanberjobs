import React, { useEffect, useContext } from "react";
import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SideMenu() {
    return (
        <>
            <div className="w-fit h-screen mr-5">
                <Sidebar>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Collapse label="Job" >
                                <Link to={"/dashboard/create-job"} className="ml-10">
                                    Create new job
                                </Link>
                            </Sidebar.Collapse>
                            <Sidebar.Collapse label="Account" >
                                <Link to={"/dashboard/account/change-password"} className="ml-10">
                                    Change password
                                </Link>
                            </Sidebar.Collapse>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </>
    );
}