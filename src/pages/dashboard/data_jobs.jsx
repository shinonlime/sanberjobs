import React, { useEffect, useContext } from "react";
import { JobsContext } from "../../context/jobs_context";

const DataJobs = () => {
    const {state, handleFunction} = useContext(JobsContext)

    const {
        data, setData,
        fetchStatus, setFetchStatus,
        input, setInput,
        currentId, setCurrentId
    } = state

    const {
        handleInput,
        handleEdit,
        handleDelete,
        fetchData
    } = handleFunction

    useEffect(() => {
        if (fetchStatus === true) {
            fetchData()
          }
    }, [fetchStatus, setFetchStatus])

    return (
        <>
            <div class="overflow-auto">
                <table class="relative table-auto w-full text-xs text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                No
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Title
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Company Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Image URL
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Job Description
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Job Qualification
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Type
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Tenure
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" class="py-3 px-6">
                                City
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Salary Min (IDR)
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Salary Max (IDR)
                            </th>
                            <th scope="col" class="py-3 px-6">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data !== null && data.map((res, index) => (
                            <tr key={res.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="w-fit py-4 px-6 font-medium text-gray-900 whitespace-wrap dark:text-white">
                                    {index+1}
                                </th>
                                <td class="py-4 px-6">
                                    {res.title}
                                </td>
                                <td class="py-4 px-6">
                                    {res.company_name}
                                </td>
                                <td class="py-4 px-6">
                                    <img src={res.company_image_url} alt="" />
                                </td>
                                <td class="py-4 px-6">
                                    {res.job_description}
                                </td>
                                <td class="py-4 px-6">
                                    {res.job_qualification}
                                </td>
                                <td class="py-4 px-6">
                                    {res.job_type}
                                </td>
                                <td class="py-4 px-6">
                                    {res.job_tenure}
                                </td>
                                <td class="py-4 px-6">
                                    {res.job_status}
                                </td>
                                <td class="py-4 px-6">
                                    {res.company_city}
                                </td>
                                <td class="py-4 px-6">
                                    {res.salary_min.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                                </td>
                                <td class="py-4 px-6">
                                    {res.salary_max.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                                </td>
                                <td class="py-4 px-6">
                                    <button onClick={handleEdit} value={res.id} className="font-medium text-blue-600 dark:text-blue-500 hover:underline m-1">Edit</button>
                                    <button onClick={handleDelete} value={res.id} className="font-medium text-red-600 dark:text-red-500 hover:underline m-1">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DataJobs