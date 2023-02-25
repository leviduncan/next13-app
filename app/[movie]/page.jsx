import Image from "next/image"
export default async function MovieDetail({ params }) {
  const { movie } = params
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: { revalidate:0 }})
  const res = await data.json()
  const imgPath = 'https://image.tmdb.org/t/p/original'
  return (
    <div className="">
      <div className="">
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>{res.runtime} minutes</h2>
        <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">{res.status}</h2>
        <Image className="my-12 w-200" src={imgPath + res.poster_path} alt={res.title} width={420} height={600} priority />
        <p>{res.overview}</p>
      </div>

    </div>
  )
}