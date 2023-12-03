import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchProfile() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input className='w-96' type="email" placeholder="Search Name" />
      <Button className='w-56'type="submit">Search</Button>
    </div>
  )
}
