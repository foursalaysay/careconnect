// ProfileCard.js
import Image from 'next/image'
import { Button } from '../ui/button';
import Link from 'next/link'

type Profile = {
    id:number;
    profilePic: string;
    name: string;
    address: string;
  };
  
  interface ProfileCardProps {
    profile: Profile;
  }

const ProfileCard:React.FC<ProfileCardProps> = ({ profile }) => {

  return (
      <div key={profile.id} className="max-w-sm h-full rounded-lg overflow-hidden shadow-lg border-1 border-blue-950">
        <Image src={profile.profilePic} alt={profile.name} width={300} height={500}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{profile.name}</div>
          <p className="text-gray-700 text-base">{profile.address}</p>
              <li key={profile.id} className='list-none'>
                <Button asChild className='w-64 my-2'>
                      <Link href={'/userprofile/{profile.id}'}>See Profile</Link>
                </Button>
              </li>
        </div>
      </div>
  );
};

export default ProfileCard;
