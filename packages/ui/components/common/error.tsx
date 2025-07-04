'use client'
import React from "react";

interface typeParams {
    message?: string
}

const ErrorTimeOut: React.FC<typeParams> = ({message}) => {
    const msg = (msg: any) => {
        return (
            <div className="flex flex-column field w-12 lg:w-8 md:2-8">
                <label htmlFor="errorMessage">Message : </label>
                <div className="h-8rem border-solid border-red-100 border-round bg-red-50 p-3 overflow-x-auto text-justify">
                    {msg}
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="card overflow-hidden">
                <div className="flex flex-wrap justify-content-center align-items-center">
                    <div className="w-12 md:w-7 lg:w-8 py-5">
                        <h1>Opps!</h1>
                        <h4>Network Error, Pedro disconnects our connection</h4>
                        <p>Sorry for that! If any connection we will try to reconnect you to the page..</p>
                        { message && msg(message) }
                    </div>
                    <div className="w-12 md:w-5 lg:w-4 py-5">
                        <div className="w-full flex flex-wrap justify-content-center align-items-center">
                            <img src={"/layout/images/pedro_error.png"} className="w-18rem" alt="pedro" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { ErrorTimeOut }