'use client'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle 
  } from "@/components/ui/navigation-menu"


import Image from 'next/image'
import logoImage from '@/images/logo.png'


import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Navbar(){

    const pathname = usePathname();
    const [isActive, setIsActive ] = useState(false);

    return(
        <div className="fixed w-full h-16 shadow-xl top-0 flex flex-row justify-around bg-white">
                <div className="w-1/2 flex items-center justify-start ml-20">
                    <Image src={logoImage} alt='logo' width={100} height={100} />
                    <h1 className='font-poppins text-2xl'>Care<span className="text-red-400">Connect</span></h1>
                </div>
                <div className="w-1/2 flex items-center justify-center flex-row gap-4">
                    <Button asChild className={`w-28 ${(pathname.includes('home')) ? 'bg-red-400 text-white' : ''}`}>
                        <Link href='/'>
                            Home
                        </Link>
                    </Button>
                    <Button asChild className={`w-28 ${(pathname.includes('list')) ? 'bg-red-400 text-white' : 'bg-none'}`}>
                        <Link href='/list'>
                            List
                        </Link>
                    </Button>
                    <Button asChild className={`w-28 ${(pathname.includes('signup')) ? 'bg-red-400 text-white' : 'bg-none'}`}>
                        <Link href='/signup'>
                            Registration
                        </Link>
                    </Button>
                    <Button asChild className={`w-28 ${(pathname.includes('login')) ? 'bg-red-400 text-white' : 'bg-none'}`}>
                        <Link href='/login'>
                            Login
                        </Link>
                    </Button>
                </div>
            </div>
    )
}