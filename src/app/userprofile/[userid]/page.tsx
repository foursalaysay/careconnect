import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from 'next/image'

  import sampleImage from '@/images/user3.jpg'


export default function UserPage(){
    return(
        <div className="w-full mt-20 justify-around flex flex-row gap-5">
            <Card className="w-1/4 border-2 border-black">
                <CardHeader>
                    <CardTitle>Alice Johnson</CardTitle>
                    <CardDescription>789 Elm St, Anycity, USA</CardDescription>
                </CardHeader>
                <CardContent>
                <Image className="rounded-lg" src={sampleImage} alt='sample' width={300} height={300}/>
                </CardContent>
            </Card>
            <div className="w-3/4 flex flex-col gap-5">
                <h2>Understanding Blindness</h2>
                <p>
                    Blindness refers to a visual impairment where an individual lacks the ability to see or has extremely limited vision.
                    Some people may have partial sight, while others may experience total blindness.
                </p>

                <h2>Precautionary Measures</h2>
                <p>
                    When interacting with blind individuals:
                    <ul>
                    <li>
                        <strong>Respect Personal Space:</strong> Announce your presence and ask if they need assistance rather than assuming.
                    </li>
                    <li>
                        <strong>Communicate Clearly:</strong> Use descriptive language and speak directly to the person, not through a companion.
                    </li>
                    <li>
                        <strong>Offer Assistance:</strong> Politely ask if they require help before providing assistance, respecting their independence.
                    </li>
                    <li>
                        <strong>Guide Assistance:</strong> If guiding, offer your arm and allow them to lightly hold it while walking.
                    </li>
                    <li>
                        <strong>Describe Surroundings:</strong> Provide details about the environment or obstacles nearby.
                    </li>
                    <li>
                        <strong>Be Patient:</strong> Allow time for responses or movements; avoid rushing interactions.
                    </li>
                    </ul>
                </p>

                <h2>Interacting Respectfully</h2>
                <p>
                    <ul>
                    <li>
                        <strong>Introduce Yourself:</strong> Always introduce yourself and others present in the conversation.
                    </li>
                    <li>
                        <strong>Ask Before Assisting:</strong> Offer help, but respect their decision if they decline.
                    </li>
                    <li>
                        <strong>Communicate Verbally:</strong> Use verbal cues when entering or leaving a room to prevent startling.
                    </li>
                    <li>
                        <strong>Be Respectful and Patient:</strong> Show respect and patience during conversations or interactions.
                    </li>
                    <li>
                        <strong>Use Clear Language:</strong> Be descriptive when giving directions or describing objects.
                    </li>
                    </ul>
                </p>
                </div>

        </div>
    )
}