"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ErrorTimeout = ({ message }) => {
    const renderMessage = (text) => {
        return (_jsxs("div", { className: "flex flex-column field w-12 lg: w-8 md:2-8", children: [_jsx("label", { htmlFor: "errorMessage", children: "Message:" }), _jsx("div", { className: "h-8rem border-solid border-red-100 border-round bg-red-50 p-3 overflow-x-auto text-justify", children: text })] }));
    };
    return (_jsx("div", { className: "card overflow-hidden", children: _jsxs("div", { className: "flex flex-wrap justify-content-center align-items-center", children: [_jsxs("div", { className: "w-12 md:w-7 lg:w-8 py-5", children: [_jsx("h1", { children: "Oops!" }), _jsx("h4", { children: "Network Error, Pedro disconnects our connection" }), _jsx("p", { children: "Sorry for that! If any connection comes back, we will try to reconnect you to the page." }), message && renderMessage(message)] }), _jsx("div", { className: "w-12 md:2-5 lg:w-4 py-5", children: _jsx("div", { className: "w-full flex flex-wrap justify-content-center align-items-center", children: _jsx("img", { src: "https://media.discordapp.net/attachments/933732877890383952/1392348989722202162/pedro_error.png?ex=686f358b&is=686de40b&hm=aa99aab440d31c0c991d92c4fe1b0ba3c385f18d2411b038eae1d8bd6a906763&=&format=webp&quality=lossless&width=1029&height=864", className: "w-18rem", alt: "Pedro" }) }) })] }) }));
};
export { ErrorTimeout };
