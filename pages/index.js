// our-domain.com
import MeetupList  from '../components/meetups/MeetupList'
import DUMMY_MEETUPS from '../datas/dummy_meetups'

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />
}

// getStaticProps est une fonction qui en prod s'éxécute au build au niveau du serveur (et non du navigateur)
// elle permet de générer des HTMLs rapidemment accessibles
export async function getStaticProps () {
  // fetch data from an API

  // retourne un objet de props
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, // rebuild sur le serveur toutes les 10 sec - unlock feature incremental static regeneration
  }
}

export default HomePage