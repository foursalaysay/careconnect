

  import ProfileCard from "@/components/reusables/profileCard";
  import { SearchProfile } from "@/components/reusables/SearchProfile";
  

export default function ListProfile(){

    


    return(
        <div className="flex flex-col items-center justify-center mt-24">
          <div className="flex flex-row gap-56 items-center mb-10">
          <h1 className='font-poppins text-5xl w-1/2'>People you may Find</h1>  
          <SearchProfile />
          </div>
            <div className="flex flex-wrap gap-5 items-center justify-center max-w-5xl">
                {profileData.map(profile => (
                <ProfileCard key={profile.id} profile={profile} />
            ))}
            </div>
        </div>
        
    )
}

export const profileData = [
  {
    id: 1,
    name: 'John Doe',
    address: '123 Main St, Anytown, USA',
    profilePic: '/images/user1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    address: '456 Oak Ave, Sometown, USA',
    profilePic: '/images/user4.jpg',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    address: '789 Elm St, Anycity, USA',
    profilePic: '/images/user3.jpg',
  },
  // Add more profiles
  {
    id: 4,
    name: 'Michael Brown',
    address: '567 Pine St, Anothercity, USA',
    profilePic: '/images/user4.jpg',
  },
  {
    id: 5,
    name: 'Emily Davis',
    address: '890 Cedar Ave, Hometown, USA',
    profilePic: '/images/user4.jpg',
  },
  {
    id: 6,
    name: 'William Wilson',
    address: '234 Birch St, Newcity, USA',
    profilePic: '/images/user1.jpg',
  },
  {
    id: 7,
    name: 'Sophia Taylor',
    address: '432 Maple Ave, Townsville, USA',
    profilePic: '/images/user4.jpg',
  },
  {
    id: 8,
    name: 'Daniel White',
    address: '876 Oak St, Metropolis, USA',
    profilePic: '/images/user3.jpg',
  },
  {
    id: 9,
    name: 'Olivia Martinez',
    address: '765 Spruce Ave, Villagetown, USA',
    profilePic: '/images/user4.jpg',
  },
  {
    id: 10,
    name: 'Liam Garcia',
    address: '543 Elm St, Cityville, USA',
    profilePic: '/images/user1.jpg',
  },
  {
    id: 11,
    name: 'Ava Rodriguez',
    address: '678 Cedar Ave, Countryland, USA',
    profilePic: '/images/user4.jpg',
  },
  {
    id: 12,
    name: 'Noah Lopez',
    address: '987 Birch St, Smalltown, USA',
    profilePic: '/images/user3.jpg',
  },
  {
    id: 13,
    name: 'Isabella Lee',
    address: '345 Pine St, Farawaycity, USA',
    profilePic: '/images/user4.jpg',
  },
  {
    id: 14,
    name: 'James Hall',
    address: '210 Oak Ave, Bigcity, USA',
    profilePic: '/images/user1.jpg',
  },
  {
    id: 15,
    name: 'Charlotte Young',
    address: '543 Maple St, Mountainville, USA',
    profilePic: '/images/user4.jpg',
  },
  {
    id: 16,
    name: 'Benjamin Hernandez',
    address: '987 Cedar Ave, Lakeview, USA',
    profilePic: '/images/user3.jpg',
  },
  {
    id: 17,
    name: 'Mia Gonzalez',
    address: '654 Elm St, Riverside, USA',
    profilePic: '/images/user4.jpg',
  },
  {
    id: 18,
    name: 'Elijah Perez',
    address: '876 Pine Ave, Parktown, USA',
    profilePic: '/images/user1.jpg',
  },
  {
    id: 19,
    name: 'Amelia Sanchez',
    address: '234 Oak St, Seaside, USA',
    profilePic: '/images/user4.jpg',
  },
  {
    id: 20,
    name: 'Harper Torres',
    address: '789 Maple Ave, Hilltop, USA',
    profilePic: '/images/user3.jpg',
  },
];