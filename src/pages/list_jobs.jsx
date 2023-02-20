import React, {useEffect, useContext} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { JobsContext } from '../context/jobs_context'
import axios from 'axios'
import { Accordion, Select, Label } from "flowbite-react";

import JobCards from '../components/cards'


const ListJobs = () => {
    const {state, handleFunction} = useContext(JobsContext)

    const [inputSearch, setInputSearch] = React.useState({
        search : ""
    })

    const [inputFilter, setInputFilter] = React.useState({
        job_type : "",
        job_tenure : "",
        company_city : "",
    })

    const handleChangeSearch = (event) => {
        let value = event.target.value
        let name = event.target.name

        setInputSearch({...inputSearch, [name] : value})
    }

    const handleChangeFilter = (event) => {
        let value = event.target.value
        let name = event.target.name

        setInputFilter({...inputFilter, [name] : value})
    }

    const {
        data, setData,
        fetchStatus, setFetchStatus
    } = state

    const {
        fetchData
    } = handleFunction

    const handleSearch = (event) => {
        event.preventDefault()

        let {
            search
        } = inputSearch

        let searchData = data.filter((res) => {
            return Object.values(res).join(' ').toLowerCase().includes(search.toLowerCase())
        })

        setData([...searchData])
    }

    const handleFilter = (event) => {
        event.preventDefault()

        let filterData = data.filter((res) => {
            return res.job_type === inputFilter.job_type || res.job_tenure === inputFilter.job_tenure || res.company_city === inputFilter.company_city
        })

        setData([...filterData])
    }

    const clearSearch = () => {

        setInputSearch({
            search : ''
        })

        fetchData()
    }

    const clearFilter = () => {

        setInputFilter({
            job_type : "",
            job_tenure : "",
            company_city : "",
        })

        fetchData()
    }

    return (
    <>
        <div className='flex flex-col items-center mx-5 xl:mx-24'>
            <h2 class="mt-10 text-3xl font-bold sm:text-4xl">List Jobs</h2>
            <div className='flex flex-col lg:flex-row mt-5 mx-5 w-full'>
                <div className='w-full mb-5 lg:w-2/6 mr-5'>
                    <form onSubmit={handleSearch} class="flex mb-2">   
                        <label for="search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input onChange={handleChangeSearch} value={inputSearch.search} name='search' type="text" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search"/>
                        </div>
                        <button type='submit' className="ml-3 mr-2 w-fit h-fit place-content-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm p-2.5 text-center transition active:scale-90 inline-flex items-center"><span class="material-symbols-rounded">search</span></button>
                        <button onClick={clearSearch} className="w-fit h-fit place-content-center text-black bg-slate-300 hover:bg-slate-400 font-medium rounded-full text-sm p-2.5 text-center transition active:scale-90 inline-flex items-center"><span class="material-symbols-rounded">close</span></button>
                    </form>

                    <Accordion alwaysOpen={true}>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Filter
                            </Accordion.Title>
                            <Accordion.Content>
                            <form onSubmit={handleFilter} class="flex flex-col mb-2">   
                                <label for="search" class="sr-only">Search</label>
                                <div class="relative w-full">
                                    <input onChange={handleChangeFilter} value={inputFilter.job_type} name='job_type' type="text" id="job_type" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Type"/>
                                    <input onChange={handleChangeFilter} value={inputFilter.job_tenure} name='job_tenure' type="text" id="job_tenure" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Tenure"/>
                                    <input onChange={handleChangeFilter} value={inputFilter.company_city} name='company_city' type="text" id="company_city" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City"/>
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <button type='submit' className="w-fit h-fit place-content-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm py-2.5 px-5 text-center transition active:scale-90 inline-flex items-center">Filter</button>
                                    <button onClick={clearFilter} className="w-fit h-fit place-content-center text-black  bg-slate-300 hover:bg-slate-400 font-medium rounded-full text-sm py-2.5 px-5 text-center transition active:scale-90 inline-flex items-center">Clear</button>
                                </div>
                            </form>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>

                <div className="w-full">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 overflow-hidden lg:overflow-auto gap-5 lg:max-h-screen">
                        <JobCards/>
                    </div> 
                </div>
            </div>
        </div>
    </>
    )
}

export default ListJobs