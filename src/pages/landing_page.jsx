import axios from "axios";
import React from "react";
import JobCards from "../components/cards";
import ListJobs from "./list_jobs";

export default function LandingPage() {
    return(
        <>
            <section className="flex flex-col justify-center items-center mx-2 md:mx-0">
                <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img alt="Party" src="./image/undraw_job_hunt_re_q203.svg" class="absolute h-full w-full"/>
                        </div>

                        <div class="lg:py-24">
                            <h2 class="text-3xl font-bold sm:text-4xl">Grow your career with SanberJobs</h2>

                            <p class="mt-4 text-gray-600">
                                A platform who can explore a dream job with no pain no gain! Get your dream job now!
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
            <ListJobs/>
        </>
    )
}