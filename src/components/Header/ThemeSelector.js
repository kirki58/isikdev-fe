"use client"

import { useEffect, useRef ,useState } from "react";

import { TbMoonStars } from "react-icons/tb";
import { TbSunHigh } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";

export default function ThemeSelector(){
    const [selected, setSelected] = useState(() => {
        return (!('theme' in localStorage) ? "system" : localStorage.theme)
    });
    const [theme, setTheme] = useState('dark');
    const [isOpen, setIsOpen] = useState(false);

    const componentRef = useRef(null);

    const handleClickOutside = (e) => {
        if (componentRef.current && !componentRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        } 
        else {
            document.documentElement.classList.remove('dark')
            setTheme('light')
        }
    },[])

    useEffect(() => {
        switch(selected){
            case "dark":
                document.documentElement.classList.add('dark')
                localStorage.theme = 'dark'
                setTheme('dark')
                break;
            case "light":
                document.documentElement.classList.remove('dark')
                localStorage.theme = 'light'
                setTheme('light')
                break;
            case "system":
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark')
                    setTheme('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                    setTheme('light')
                }
                localStorage.removeItem('theme');
                break;
        }
    }, [selected])
    return(
        <div ref={componentRef} className="order-3 flex md:flex-row-reverse max-md:place-content-center">
            <button id="toggleOpenBtn" onClick={() => setIsOpen(!isOpen)}>
                {
                theme === "dark" ? 
                <TbMoonStars className="hover:text-darker-600 dark:hover:text-lighter-500 transition-all duration-100 text-lg"/> : 
                <TbSunHigh className="hover:text-darker-600 dark:hover:text-lighter-500 transition-all duration-100 text-lg"/>}
            </button>


            {isOpen &&
            <div id="selectorParent" className="absolute max-md:-bottom-36 bg-lighter-200 dark:bg-darker-800 flex flex-col rounded-md space-y-2 w-48 p-1
            md:top-16">
                <button onClick={() => {setSelected("dark")}} id="darkSelector" className={(selected === "dark" ? "dark:text-lighter-100 text-darker-900" : "dark:text-lighter-600 text-darker-200")  + " flex flew-row space-x-2 p-2 hover:text-darker-900 dark:hover:text-lighter-100 justify-center"}>
                    <TbMoonStars className="self-center"/>
                    <p>Dark</p>
                </button>

                <button onClick={() => {setSelected("light")}} id="lightSelector" className={(selected === "light" ? "dark:text-lighter-100 text-darker-900" : "dark:text-lighter-600 text-darker-200")  + " flex flew-row space-x-2 p-2 hover:text-darker-900 dark:hover:text-lighter-100 justify-center"}>
                    <TbSunHigh className="self-center"/>
                    <p>Light</p>
                </button>

                <button onClick={() => {setSelected("system")}} id="systemSelector" className={(selected === "system" ? "dark:text-lighter-100 text-darker-900" : "dark:text-lighter-600 text-darker-200")  + " flex flew-row space-x-2 p-2 hover:text-darker-900 dark:hover:text-lighter-100 justify-center"}>
                    <FiMonitor className="self-center"/>
                    <p>Sistem</p>
                </button>
            </div>
            }
        </div>
    );
}