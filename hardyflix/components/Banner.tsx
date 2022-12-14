import Image from 'next/image'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/solid'
import { modalState, movieState } from '../atoms/modalAtom'
import { useRecoilState } from 'recoil'

interface Props {
    netflixOriginals: Movie[]
}

function Banner({netflixOriginals}: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [isScrolled, setIsScrolled] = useState(false)

//   랜덤으로 메인 movie set
  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [netflixOriginals])
  console.log(movie)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      {/* 스크롤되면 배너 이미지 pop */}
      <div className= {`${!isScrolled && "fixed top-0 left-0 right-0 w-screen h-full"} ${isScrolled && "fixed top-0 left-0 right-0 w-screen h-1/12"}`}>
      {/* "fixed top-0 left-0 right-0 w-screen h-3/5" */}
     
      {/* sm:h-1/5 md:h-1/4 lg:-z-10 w-1/1 */}
        <Image 
          src={`${baseUrl}original${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover" 
        />
      </div>
      
      <div>
        <h1 className="relative text-2xl font-bold left-5 md:text-4xl lg:text-7xl z-10">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="relative max-w-xs text-xs text-shadow-md left-5 md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          {movie?.overview}
        </p>
      </div>

      <div className='flex flex-row'>
        <button className="relative bannerButton left-5 h-10 w-30 bg-white text-black">
          <FaPlay className='h-4 w-4 text-red-500 md:h-4.5 md:w-4.5'/>Play
        </button>
        <button 
          className="relative bannerButton h-10 w-30 left-20 text-1xl bg-gray-500"
          onClick={()=> {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8' /> More Info 
        </button>
      </div>
    </div> 
  )
}

export default Banner