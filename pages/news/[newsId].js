// our-domain.com/news/id

import { useRouter } from 'next/router'

function News() {
  const router = useRouter()
  
  return (
    <div>
      news {router.query.newsId}
    </div>
  )
}

export default News