"use client";
import React from "react";

interface ErrorTimeoutProps {
  message?: string;
}

const ErrorTimeout: React.FC<ErrorTimeoutProps> = ({ message }) => {
  const renderMessage = (text: string) => {
    return (
      <div className="flex flex-column field w-12 lg: w-8 md:2-8">
        <label htmlFor="errorMessage">Message:</label>
        <div className="h-8rem border-solid border-red-100 border-round bg-red-50 p-3 overflow-x-auto text-justify">
          {text}
        </div>
      </div>
    );
  };

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap justify-content-center align-items-center">
        <div className="w-12 md:w-7 lg:w-8 py-5">
          <h1>Oops!</h1>
          <h4>Network Error, Pedro disconnects our connection</h4>
          <p>
            Sorry for that! If any connection comes back, we will try to
            reconnect you to the page.
          </p>
          {message && renderMessage(message)}
        </div>
        <div className="w-12 md:2-5 lg:w-4 py-5">
          <div className="w-full flex flex-wrap justify-content-center align-items-center">
            <img
              src="https://media.discordapp.net/attachments/933732877890383952/1392348989722202162/pedro_error.png?ex=686f358b&is=686de40b&hm=aa99aab440d31c0c991d92c4fe1b0ba3c385f18d2411b038eae1d8bd6a906763&=&format=webp&quality=lossless&width=1029&height=864"
              className="w-18rem"
              alt="Pedro"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ErrorTimeout };
