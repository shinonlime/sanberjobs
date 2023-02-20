import React, { useEffect, useContext } from "react";
import { Sidebar } from "flowbite-react";
import { JobsContext } from "../../context/jobs_context";
import { Outlet } from "react-router-dom";
import SideMenu from "../../components/sidemenu";
import DataJobs from "./data_jobs";

export default function Dashboard() {
    return (
        <div className="flex flex-row">
            <SideMenu/>
            <DataJobs/>
        </div>
    );
}