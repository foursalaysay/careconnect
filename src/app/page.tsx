
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import InputButton from '@/components/reusables/InputButton';
import nextImage from '@/images/profile.jpg'
import userImage from '@/images/user.jpg'


export default function Home() {
  return (
    <div className="w-screen h-full flex flex-row mt-20">
      <div className="w-1/2 flex flex-col items-center justify-center mt-20">
        <div className="rounded-full shadow-xl">
          <Image
            src={nextImage}
            width={300}
            height={300} // Adjusted height
            alt="Picture of the author"
          />
        </div>
        <h1 className="text-4xl font-poppins font-bold">We Care</h1>
        <h1 className="text-4xl font-poppins font-bold">We Connect</h1>
        <InputButton />
      </div>
      
      <div className="w-1/2 flex flex-col items-center justify-center">
        
        <div className="rounded-full border-2 border-blue-500 px-5 py-5 my-5">
          <Image
            src={userImage}
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
        
      </div>
    </div>
  );
}
