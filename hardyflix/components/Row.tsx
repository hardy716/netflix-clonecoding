import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import { useRef, useState } from "react"
import { Movie } from "../typings"
import Thumbnail from "./Thumbnail"

interface Props {
    title: string
    // movie: Movie | DocumentData    -> Firebase
    movies: Movie[]
}

function Row({title, movies}: Props) { 
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: String) => {
    setIsMoved(true)

    if (rowRef.current) {
      const {scrollLeft, clientWidth} = rowRef.current
      console.log(scrollLeft)
      console.log(clientWidth)

      const scrollTo = 
        direction === "left" 
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      console.log(scrollTo)

      rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
    }
  }

  return (
    <div className="h-auto space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-white transition
      duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9
        cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100
        ${!isMoved && "hidden"}`}
        onClick={() => handleClick("left")}/>

        <div className="relative flex items-center space-x-1 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        ref={rowRef}
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie}/>
          ))}
        </div>

        <ChevronRightIcon className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9
        cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
        onClick={() => handleClick("right")}/>
      </div>
    </div>
  )
}

export default Row