



import loginImage from '@/images/loginuser.svg'
import Image from 'next/image'

import LoginCard from '@/components/reusables/LoginCard'


export default function LoginForm(){
    return(
        <div className="w-full h-full flex flex-row items-center justify-center mt-20">
            <div className='w-1/2 self-center'>
                <Image 
                src={loginImage}
                width={600}
                height={600}
                alt="Login Image"
                />
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <LoginCard />
            </div>
        </div>
    )
}