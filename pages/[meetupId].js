// our-domain.com/news/id

import { useRouter } from 'next/router'
import MeetupDetail from '../components/meetups/MeetupDetail'

function meetupDetails() {
  const router = useRouter()
  
  return (
    <MeetupDetail
      title='Bali'
      image= 'https://www.cwlfly.com/wp-content/uploads/2019/08/voyage-bali-que-faire-voir.jpg'
      address= ' Jl. Penestanan, Sayan, Bali, Ubud 80571 Bali Indonesia'
      description='Whichever level of accommodation you choose, your stay at The Mansion will be truly unique, for each suite or room is unique and luxurious.'
    />
  )
}

export default meetupDetails