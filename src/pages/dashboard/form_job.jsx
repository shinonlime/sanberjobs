import React, { useState, useEffect, useContext } from "react";
import { JobsContext } from "../../context/jobs_context";
import { useParams } from "react-router-dom";
import axios from "axios";
import SideMenu from "../../components/sidemenu";

const FormJob = () => {
    const {state, handleFunction} = useContext(JobsContext)

    const {
        data, setData,
        fetchStatus, setFetchStatus,
        input, setInput,
        currentId, setCurrentId
    } = state

    const {
        fetchData,
        handleInput,
        handleEdit,
        handleSubmit,
    } = handleFunction

    let {idData} = useParams();

    useEffect(() => {
        if(idData !== undefined) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
            .then((res) => {
                let data = res.data
                setInput({
                    title : data?.title,
                    company_name : data?.company_name,
                    company_city : data?.company_city,
                    job_tenure : data?.job_tenure,
                    salary_min : data?.salary_min,
                    salary_max : data?.salary_max,
                    job_description : data?.job_description,
                    company_image_url : data?.company_image_url,
                    job_qualification : data?.job_qualification,
                    job_type : data?.job_type,
                    job_status : data?.job_status
                })
            })
        }
    }, [])

    console.log(data)

    return (
        <>
        <div className="flex flex-row">
            <SideMenu/>
            <form onSubmit={handleSubmit} class="mt-3 w-1/2 mx-auto">
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title Job</label>
                    <input onChange={handleInput} value={input.title} type="text" name="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Name</label>
                    <input onChange={handleInput} value={input.company_name} type="text" name="company_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div> 
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Image URL</label>
                    <input onChange={handleInput} value={input.company_image_url}  type="text" name="company_image_url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div> 
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Description</label>
                    <textarea onChange={handleInput} value={input.job_description} type="text" name="job_description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Qualification</label>
                    <textarea onChange={handleInput} value={input.job_qualification} type="text" name="job_qualification" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Type</label>
                        <input onChange={handleInput} value={input.job_type} type="text" name="job_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Tenure</label>
                        <input onChange={handleInput} value={input.job_tenure} type="text" name="job_tenure" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>  
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Status</label>
                        <input onChange={handleInput} value={input.job_status} type="number" name="job_status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company City</label>
                        <input onChange={handleInput} value={input.company_city} type="text" name="company_city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Min Salary</label>
                        <input onChange={handleInput} value={input.salary_min} type="number" name="salary_min" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Max Salary</label>
                        <input onChange={handleInput} value={input.salary_max} type="number" name="salary_max" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>
                <button type={'submit'} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
        </>
    )
}

export default FormJob