import Image from 'next/Image'
import { baseUrl } from '../constants/movie'
import { Movie } from "../typings"

interface Props {
  movie: Movie
    // movie: Movie | DocumentData    -> Firebase
}

function Thumbnail({movie}: Props) {
  return (
    <div className='relative cursor-pointer transition duration-200
    ease-out sm:h-24 md:h-36 lg:h-48'>
      {/* 아래 글자 길이만큼 너비가 정해짐..? */}
      {/* 텍스트 스판 태그...? */}
      aaaaaaaaaaaaaaaaaaaaaaa
      <Image
        src={`${baseUrl}w500${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail  