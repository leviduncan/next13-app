import Link from "next/link";
import Image from "next/image"

export default function Movie({key, id, title, poster_path, release_date}) {
  const imgPath = 'https://image.tmdb.org/t/p/original'
  return (
    <div key={key}>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image src={imgPath + poster_path} alt={title} width={220} height={300}/>
      </Link>
    </div>
  )
}