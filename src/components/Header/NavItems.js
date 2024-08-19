import { IoSearchOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

import Link from "next/link";

import ThemeSelector from "./ThemeSelector";

export default function NavItems(){
    return(
        // parent nav is in "./Hamburger.js"
        <>
        <div className="w-full h-10 flex flex-row md:space-x-2 self-center md:order-2 lg:w-96 md:w-80">
            <button className="w-1/12 p-2">
                <IoSearchOutline size={20} className="opacity-90 transition-all duration-100"/>
            </button>
            <input type="text" className="h-10 w-11/12 dark:bg-darker-900 outline-none p-4" placeholder="Kurslarımızı Ara.."/>
        </div>
        <ul className="flex flex-col space-y-8 md:space-y-0 md:flex-row 
        h-full md:space-x-5 text-darker-400 dark:text-lighter-500 md:order-1 w-full">
            <li className="p-1 hover:text-darker-900 dark:hover:text-lighter-100 transition-all duration-100  flex flex-row space-x-4">
                <Link href="#" className="w-11/12 md:w-auto">Kurslar</Link>
                <FaAngleRight className="self-center md:hidden"/>
            </li>

            <li className="p-1 hover:text-darker-900 dark:hover:text-lighter-100 transition-all duration-100  flex flex-row space-x-4">
                <Link href="#" className="w-11/12 md:w-auto">Blog</Link>
                <FaAngleRight className="self-center md:hidden"/>
            </li>

            <li className="p-1 flex flex-row space-x-4 dark:text-lighter-100 text-darker-900">
                <Link href="#" className="w-11/12 md:w-auto">Giriş Yap</Link>
                <FaAngleRight className="self-center md:hidden"/>
            </li>

            <li className="p-1 flex flex-row space-x-4 dark:text-lighter-100 
            max-md:pb-8 border-b-[1px] dark:border-darker-700 md:border-none text-darker-900">
                <Link href="#" className="w-11/12 md:w-auto">Kayıt Ol</Link>
                <FaAngleRight className="self-center md:hidden"/>
            </li>
        </ul>
        <ThemeSelector />
        </>
    );
}