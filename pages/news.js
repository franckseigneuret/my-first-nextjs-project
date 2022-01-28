// our-domain.com/news

import Link from "next/link"

function News() {
  return (
    <>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="news/news-1">
            News 1
          </Link>
        </li>
        <li>
          <Link href="news/news-2">
            News 2
          </Link>
        </li>
      </ul>
    </>
  )
}

export default News