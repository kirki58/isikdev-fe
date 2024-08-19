"use client"

import { HiMiniBars3 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { useEffect, useState } from "react";

export default function Hamburger({children}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHamburger = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        setIsOpen(window.innerWidth > 768 ? true : false);
        window.addEventListener("resize", () => {
            setIsOpen(window.innerWidth > 768 ? true : false);
        })

        return () => {
            window.removeEventListener("resize", () => {
                setIsOpen(window.innerWidth > 768 ? true : false);
            })
        }
    },[])
    return (
        <>
        <button onClick={toggleHamburger} className="focus:outline-none p-1 active:bg-lighter-200 dark:active:bg-darker-800 rounded-lg md:hidden">
            {isOpen ? <HiMiniXMark size={24} className="dark:text-slate-200"/> : <HiMiniBars3 size={24} className="dark:text-slate-200"/>}
        </button>

        {isOpen &&
        <nav id="navItemsHolder" className="max-md:absolute top-20 h-auto p-3
        border-t-[1px] dark:border-darker-700
        w-full dark:bg-darker-900 z-50
        flex flex-col max-md:place-content-center space-y-8
        md:border-none
        md:space-y-0 md:flex-row
        md:px-2 md:py-4">
            {children}
        </nav>
        }
        </>
    )
}