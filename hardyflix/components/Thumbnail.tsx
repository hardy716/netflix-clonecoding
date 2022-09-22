import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import { baseUrl } from '../constants/movie'
import { Movie } from "../typings"

interface Props {
  movie: Movie
    // movie: Movie | DocumentData    -> Firebase
}

function Thumbnail({movie}: Props) {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)
  return (
    <div className="relative h-36 w-[180px] cursor-pointer transition duration-200 ease-out md:h-45 md:w-[240px] md:hover:scale-105
    lg:h-54 lg:w-[360px]"
    onClick={()=>{
      setCurrentMovie(movie)
      setShowModal(true)
    }}>
      {/* <div className='relative cursor-pointer transition duration-200 ease-out sm:h-24 md:h-36 lg:h-48 sm:h-36 md:h-54 lg:h-72'> */}
      {/* 아래 글자 길이만큼 너비가 정해짐..? */}
      {/* 텍스트 스판 태그...? */}
      {/* utils.js?e7ff:97 Image with src "https://image.tmdb.org/t/p/w500/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.
      Read more: https://nextjs.org/docs/api-reference/next/image#priority */}
        aaaaaaaaaaaaaaaaaaaaa
        <span></span>
        <Image
          // src={`${baseUrl}w500${movie.backdrop_path || movie.poster_path}`}
        // className="rounded-sm object-cover md:rounded"
        src={`${baseUrl}w500${
                    movie.backdrop_path || movie.poster_path
                }`}
                className="rounded-sm object-cover md:rounded"
        layout="fill"
        />

    </div>
  )
}

export default Thumbnail  