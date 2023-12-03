'use client'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle 
  } from "@/components/ui/navigation-menu"

import Link from 'next/link'
import Image from 'next/image'
import logoImage from '@/images/logo.png'

export default function Navbar(){
    return(
        <div className="fixed w-full h-16 shadow-xl top-0 flex flex-row justify-around bg-white">
                <div className="w-1/2 flex items-center justify-start ml-20">
                    <Image src={logoImage} alt='logo' width={100} height={100} />
                    <h1 className='font-poppins text-2xl'>Care<span className="text-rose-600">Connect</span></h1>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-row gap-4">
                            <NavigationMenuItem >
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem >
                                <Link href="list" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        List
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem >
                                <Link href="login" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Login
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem >
                                <Link href="signup" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Register
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
    )
}