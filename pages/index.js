// our-domain.com
import MeetupList  from '../components/meetups/MeetupList'


const DUMMY_MEETUPS = [
  {
    id:'m1',
    title:'Bali',
    image: 'https://www.cwlfly.com/wp-content/uploads/2019/08/voyage-bali-que-faire-voir.jpg',
    address: ' Jl. Penestanan, Sayan, Bali, Ubud 80571 Bali Indonesia',
    description: `Whichever level of accommodation you choose, your stay at The Mansion will be truly unique, for each suite or room is unique and luxurious.
    Exceptional traditional and contemporary Balinese art hangs in every room, including rare and beautiful objets d’art and all furnishings and appointments are of the finest quality.`,
  },
  {
    id:'m2',
    title:'Cambodge',
    image: 'https://worldpass.heyme.care/sites/default/files/styles/xlarge/public/2021-05/Les%20incontournables%20du%20Cambodge.jpg',
    address: 'Angkor Vat, Le Bayon, Le Ta Prohm',
    description: `Le Cambodge est le pays des rizières, des palmiers à sucres et des vestiges historiques… autant de trésors qui font du pays du sourire une destination où il fait bon vivre.
    Voici nos incontournables pour faire de votre voyage au Cambodge une expérience inoubliable.`,
  },
]

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