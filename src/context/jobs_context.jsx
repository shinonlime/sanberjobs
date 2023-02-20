import React from "react";
import { createContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const JobsContext = createContext()

export const JobsProvider = (props) => {
    const [data, setData] = useState(null)

    const [fetchStatus, setFetchStatus] = useState(true)

    const [currentId, setCurrentId] = useState(-1)

    const navigate = useNavigate()

    const [input, setInput] = useState({
        title : "",
        company_name : "",
        company_city : "",
        job_tenure : "",
        salary_min : "",
        salary_max : "",
        job_description : "",
        company_image_url : "",
        job_qualification : "",
        job_type : "",
        job_status : "",
    })

    let fetchData = () => {
        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
            setData([...res.data.data])
        })
        .catch((error) => {
            console.log(error)
        })
        setFetchStatus(false)
    }

    const handleInput = (event) => {
        
        let value = event.target.value
        let name = event.target.name

        setInput({...input, [name] : value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let {
            title,
            company_name,
            company_city,
            job_tenure,
            salary_min,
            salary_max,
            job_description,
            company_image_url,
            job_qualification,
            job_type,
            job_status
        } = input

        if(currentId === -1){
            axios.post(`https://dev-example.sanbercloud.com/api/job-vacancy`, {
                title, company_name, company_city, job_tenure, salary_min, salary_max, job_description, company_image_url, job_qualification, job_type, job_status
            }, {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}} )
            .then((res) =>{
                setFetchStatus(true)
                navigate('/dashboard');
            })
        } else {
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`, {
                title, company_name, company_city, job_tenure, salary_min, salary_max, job_description, company_image_url, job_qualification, job_type, job_status
            }, {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}} )
            .then((res) =>{
                setFetchStatus(true)
                navigate('/dashboard');
            })
        }

        setCurrentId(-1)
        
        setInput({
            title : "",
            company_name : "",
            company_city : "",
            job_tenure : "",
            salary_min : "",
            salary_max : "",
            job_description : "",
            company_image_url : "",
            job_qualification : "",
            job_type : "",
            job_status : "",
        })
    }

    const handleEdit = (event) => {
        let idData = parseInt(event.target.value)
    
        setCurrentId(idData)

        navigate(`/dashboard/edit-job/${idData}`)
    }

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)

        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`,
        {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}} )
        .then((res) =>{
            setFetchStatus(true)
        })
    }

    let state = {
        data, setData,
        fetchStatus, setFetchStatus,
        input, setInput,
        currentId, setCurrentId
    }

    let handleFunction = {
        handleInput,
        handleEdit,
        handleDelete,
        handleSubmit,
        fetchData
    }

    return(
        <JobsContext.Provider value={{state, handleFunction}}>
            {props.children}
        </JobsContext.Provider>
    )
}