// our-domain.com/news/id

import { useRouter } from 'next/router'
import MeetupDetail from '../components/meetups/MeetupDetail'
import DUMMY_MEETUPS from '../datas/dummy_meetups'
import { getDatasCurrentId, getIdsFromArray } from '../datas/getDatasHelpers'

function MeetupDetails(props) {
  const router = useRouter()

  return (
    <MeetupDetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  )
}

// getStaticProps est utlisé pendant le buid pour générer le pré-rendu des pages 
export async function getStaticProps(context) {
  // ---------- TEMPO (fetch API does not exits yet) ------------- //
  const {
    currentTitle,
    currentImage,
    currentAddress,
    currentDescription,
  } = getDatasCurrentId(DUMMY_MEETUPS, context.params.meetupId)
  // ----------------------------- END --------------------------- //

  return {
    props: {
      meetupData: {
        id: context.params.meetupId,
        title: currentTitle,
        image: currentImage,
        address: currentAddress,
        description: currentDescription,
      },
    },
  }
}

// getStaticPaths est obligatoire lorsqu'on est sur un fichier dynamique [meetupId].js et qu'il y a getStaticProps
// permet à nextJS de connaître les ids des pages qu'il doit générer
/* exemple
  return {
    paths:[
      {params: {meetupId: 'm1'}},
      {params: {meetupId: 'm2'}},
    ],
    fallback: false,
  }
*/
export async function getStaticPaths(context) {
  // console.log(context.params.meetupId);
  // fetch data from an API
  const idsArray = getIdsFromArray(DUMMY_MEETUPS)

  return {
    paths: idsArray.map(id => ({ params: { meetupId: id } })),
    fallback: false, // false si paths contient toutes les valeurs id supportées (sinon ça oriente vers 404) || true s'il contient seulement une partie (most populate) et permet de générer dynamiquement les suppléantes
  };
}

export default MeetupDetails