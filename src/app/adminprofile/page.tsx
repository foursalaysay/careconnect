'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from 'react'
import { Button } from '@/components/ui/button'

import Calendar from '@/components/reusables/Calendar'
import { SearchProfile } from "@/components/reusables/SearchProfile"

export default function AdminPage(){
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return(
        <div className="w-full mt-20 flex flex-col items-center justify-center">
           <div className="flex flex-row gap-40 items-center ml-10 mt-5">
          <h1 className='font-poppins text-5xl w-1/2'>Add a PWD Profile</h1>  
          <SearchProfile />
          </div>
        <div className="w-full mt-20 flex flex-row gap-5 mb-20">
             <div className="w-1/2 ml-10 flex flex-col gap-5">
                <div className="flex flex-row w-full items-center justify-around gap-10 mx-auto">
                    <Label htmlFor="email">Full Name</Label>
                    <Input className='w-72' type="email" id="email" placeholder="Lyna Busan" />
                </div>
                <div className="flex flex-row w-full items-center justify-around gap-10">
                    <Label htmlFor="email">Birthdate</Label>
                    <Calendar />
                </div>
                <div className="flex flex-row w-full items-center justify-around gap-10">
                    <Label htmlFor="email">Age</Label>
                    <Input className='w-72' type="email" id="email" placeholder="17" />
                </div>
                <div className="flex flex-row w-full items-center justify-around gap-10">
                    <Label htmlFor="email">Gender</Label>
                    <Input className='w-72' type="email" id="email" placeholder="Female" />
                </div>
                <div className="flex flex-row w-full items-center justify-around gap-10">
                    <Label htmlFor="email">Address</Label>
                    <Input className='w-72' type="email" id="email" placeholder="Argao" />
                </div>
                
              
             </div>
             <div className="w-1/2 ml-10 flex flex-col gap-5">
             <div className="flex flex-row w-full items-center justify-around gap-10">
                    <Label htmlFor="email">Type of Disability</Label>
                    <Input className='w-72' type="email" id="email" placeholder="Blindness" />
                </div>
                <div className="flex flex-row w-full items-center justify-around gap-10">
                    <Label htmlFor="email">Specific Needs</Label>
                    <Input className='w-72' type="email" id="email" placeholder="Mobility and Navigation" />
                </div>
                <div className="flex flex-row w-full items-center justify-around gap-10">
                    <Label htmlFor="email">Preferences</Label>
                    <Input className='w-72' type="email" id="email" placeholder="Communication" />
                </div>
                <div className="flex flex-row w-full items-center justify-around gap-10">
                    <Label htmlFor="email">Safety Concerns</Label>
                    <Input className='w-72' type="email" id="email" placeholder="Obstacle Awareness" />
                </div>
                <div className="flex flex-row w-full items-center justify-around gap-10">
                    <Label htmlFor="email">Contact Number</Label>
                    <Input className='w-72' type="email" id="email" placeholder="09*********" />
                </div>
             </div>
             
        </div>
        <Button className="w-96 self-center">Save Data</Button>
        </div>
    )
}