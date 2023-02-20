import React from "react";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "flowbite-react";

export default function DetailJob(){
    const [detail, setDetail] = useState(null)

    const {idData} = useParams()
    
    useEffect(() => {
      if(idData !== undefined){
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
        .then((res) => {
            setDetail(res.data)
        })
      }
    }, [])

    
    if(detail === null){
        return(
            <div className="text-center">
                <Spinner size='xl' />
            </div>
        )
    }

    let Status = (params) => {
        if(params === 0){
            return(
                <>
                    <button className="w-32 h-fit place-content-center text-gray-500 cursor-not-allowed bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-3 inline-flex items-center" disabled><span class="material-symbols-rounded mr-1">work</span>Apply</button>
                    <button className="w-32 h-fit place-content-center text-gray-500 cursor-not-allowed bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center" disabled><span class="material-symbols-rounded mr-1">send</span>Share</button>
                </>
            )
        } else {
            return(
                <>
                    <button className="w-32 h-fit place-content-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center transition active:scale-90 mb-3 inline-flex items-center"><span class="material-symbols-rounded mr-1">work</span>Apply</button>
                    <button className="w-32 h-fit place-content-center	 text-black bg-blue-50 hover:bg-blue-100 font-medium rounded-full text- px-5 py-2.5 text-center transition active:scale-90 inline-flex items-center"><span class="material-symbols-rounded mr-1">send</span>Share</button>
                </>
            )
        }
    }

    let BagdeStatus = (params) => {
        if(params === 0){
            return <span class="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">Close</span>
        } else {
            return <span class="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">Open</span>
        }
    }

    return(
        <div className="flex flex-col md:flex-row my-10 mx-5 lg:mx-10 xl:mx-36">
            <div className="w-full divide-y-2 divide-blue-100 mb-10">
                <div className="flex flex-col sm:flex-row mb-5">
                    <div>
                        <img src={detail?.company_image_url} className="w-24 h-auto rounded-md"/>
                    </div>
                    
                    <div className="mb-2 md:m-0 md:ml-3 flex flex-col justify-between w-full">
                        <div className="mb-3">
                            <div className="flex flex-row gap-3 items-center">
                                <h1 className="font-medium text-2xl">{detail?.title}</h1>
                                {BagdeStatus(detail?.job_status)}
                            </div>
                            <p className="text-md">{detail?.company_name}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs">{detail?.company_city} &middot; {detail?.job_tenure} &middot; {detail?.job_type}</p>
                            <p className="text-gray-500 text-xs">IDR {detail?.salary_min.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} - {detail?.salary_max.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:items-end justify-between">
                        {Status(detail?.job_status)}
                    </div>
                </div>

                <div>
                    <div className="mt-5 mb-2">
                        <h3 className="font-medium text-xl">Job Description</h3>
                    </div>
                    <div>
                        <p>{detail?.job_description}</p>
                    </div>
                    <div className="mt-5 mb-2">
                        <h3 className="font-medium text-xl">Job Qualification</h3>
                    </div>
                    <div>
                        <p>{detail?.job_qualification}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}