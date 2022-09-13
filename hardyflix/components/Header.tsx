import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
// https://stackoverflow.com/questions/68809554/how-to-fix-module-not-found-cant-resolve-heroicons-react-solid-in-react-app

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { logout } = useAuth()
  
  // 스크롤 효과
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
    <header className={`${isScrolled && 'bg-black'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        {/* https://tailwindcss.com/docs/space */}

        {/* 좌측 상단 넷플릭스 로고 */}
        <img 
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain" 
        />

        {/* 상단 메뉴 바 */}
        {/* hidden 기준이 무엇인지? */}
        <ul className="hidden space-x-5 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      
      {/* 우측 상단 아이콘 */}
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6"/>
        <Link href="/account">
            <img
              onClick={logout} 
              src="https://rb.gy/g1pwyx" 
              alt=""
              className="cursor-pointer rounded" 
            />
        </Link>
      </div>
    </header>
  )
}

export default Header