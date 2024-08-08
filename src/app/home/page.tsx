
import Image from 'next/image';
import InputButton from '@/components/reusables/InputButton';
import nextImage from '@/images/image.svg'
import userImage from '@/images/user.jpg'


export default function Home() {
  return (
    <div className="w-screen h-[100vh - 64px] flex flex-row mt-20 items-center justify-center">
      <div className="w-1/2 flex flex-col items-center justify-center mt-20 gap-10">
          <Image
            src={nextImage}
            width={500}
            height={500} // Adjusted height
            alt="Picture of the author"
          />
       
      </div>
      <div className='w-1/2 justify-center items-center mt-20'>
        <h1 className="text-7xl font-poppins font-normal">We Care</h1>
        <h1 className="text-8xl font-poppins font-bold text-red-400 mb-10">We Connect</h1>
          <InputButton />
      </div>
    </div>
  );
}
