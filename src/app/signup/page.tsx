import registerImage from '@/images/register.jpg'

import Image from 'next/image'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'

export default function SignupPage(){
    return(
        <div className="w-full flex flex-row gap-5 mt-20">
            <div className="w-1/2 flex items-center justify-center">
                <Image

                src={registerImage}
                width={500}
                height={500}
                alt="Register"
                />
            </div>
            
            <div className="w-1/2 ml-10 flex flex-col gap-5">
            <h1 className='font-poppins font-medium text-4xl'>Register</h1>
            <div className="flex flex-row w-full items-center justify-start gap-10 mx-auto">
                    <Label className='w-32' htmlFor="email">Username</Label>
                    <Input className='w-72' type="email" id="email" placeholder="" />
                </div>
                <div className="flex flex-row w-full items-center justify-start gap-10 mx-auto">
                    <Label  className='w-32' htmlFor="email">Password</Label>
                    <Input className='w-72' type="email" id="email" placeholder="" />
                </div>
                <div className="flex flex-row w-full items-center justify-start gap-10 mx-auto">
                    <Label className='w-32' htmlFor="email">Confirm Password</Label>
                    <Input className='w-72' type="email" id="email" placeholder="" />
                </div>
                <div className="flex flex-row w-full items-center justify-start gap-10 mx-auto">
                    <Label  className='w-32' htmlFor="email">Full Name</Label>
                    <Input className='w-72' type="email" id="email" placeholder="Lyna Busan" />
                </div>
                <div className="flex flex-row w-full items-center justify-start gap-10">
                    <Label className='w-32' htmlFor="email">Age</Label>
                    <Input className='w-72' type="email" id="email" placeholder="17" />
                </div>
                <div className="flex flex-row w-full items-center justify-start gap-10">
                    <Label className='w-32' htmlFor="email">Gender</Label>
                    <Input className='w-72' type="email" id="email" placeholder="Female" />
                </div>
                <div className="flex flex-row w-full items-center justify-items-stretch gap-10">
                    <Label className='w-32' htmlFor="email">Address</Label>
                    <Input className='w-72' type="email" id="email" placeholder="Argao" />
                </div>
                
              <Button className='w-72'>Sign Up</Button>
             </div>
            </div>
        
    )
}