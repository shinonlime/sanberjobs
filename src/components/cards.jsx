import React, {useContext, useEffect} from "react";
import { JobsContext } from "../context/jobs_context";
import { Link } from "react-router-dom";

export default function JobCards(){
    const {state, handleFunction} = useContext(JobsContext)

    const {
        data, setData,
        fetchStatus, setFetchStatus
    } = state

    const {
        fetchData
    } = handleFunction

    useEffect(() => {
        if (fetchStatus === true) {
            fetchData()
          }
    }, [fetchStatus, setFetchStatus])

    let Status = (params) => {
        if(params === 0){
            return(
                <strong class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-red-600 py-1.5 px-3 text-white">
                    <span class="text-[10px] font-medium sm:text-xs">Close</span>
                </strong>
            )
        } else if(params === 1){
            return(
                <strong class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white">
                    <span class="text-[10px] font-medium sm:text-xs">Open</span>
                </strong>
            )
        }
    }

    return(
        <>
            {data !== null && (
                <>
                {data.map((res, index) => {
                    return(
                        <Link to={`detail-job/${res.id}`} key={res.id} class="relative flex content-start rounded-xl border-2 border-blue-100 bg-white w-full h-full transition hover:bg-blue-100 md:active:scale-95 text-start">
                            <div class="flex items-start p-6 select-none">
                                <span class="block shrink-0 items-center">
                                    <img src={res.company_image_url} class="h-auto w-14 rounded-lg object-cover "/>
                                </span>

                                <div class="ml-4">
                                    <h3 class="font-medium text-lg">
                                        {res.title}
                                    </h3>

                                    <p class="font-medium text-sm pb-1">
                                        {res.company_name}
                                    </p>

                                    <p class="text-xs text-gray-700 line-clamp-2">
                                        {res.job_description}
                                    </p>

                                    <div class="mt-2 flex sm:items-center sm:gap-2 mb-2">
                                        <div class="flex items-center text-gray-500">
                                            <p class="text-xs">{res.job_tenure}</p>
                                        </div>

                                        <span class="mx-2 sm:mx-0" aria-hidden="true">&middot;</span>

                                        <div class="flex items-center text-gray-500">
                                            <p class="text-xs">{res.company_city}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="absolute bottom-0 right-0">
                                {Status(res.job_status)}
                            </div>
                        </Link>
                    )
                })}
                </>
            )}
        </>
    )
}