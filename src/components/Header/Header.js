import Hamburger from "./Hamburger";
import NavItems from "./NavItems";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return (
        <header className="w-full h-20 py-2 flex flex-row justify-between pr-3 font-monsterrat font-medium">
            <Link href="#" className="self-center md:p-4 md:mr-4 max-md:ml-3">
                <Image src="/logo.png" alt="logo" width={80} height={80} />
            </Link>
            <Hamburger>
                <NavItems />
            </Hamburger>
        </header>
    )
}