import React, { useEffect, useState } from 'react'
import { getTrending, IMAGE_BASE_URL, api_key } from '../services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const screenWidth = window.innerWidth

const Slider = () => {
    const [movieList, setMovieList] = useState([])
    const imageRef = React.useRef(null)
    useEffect(() => {
        getTrendingMovies()
    }, [])

    const getTrendingMovies = async () => {
        const response = await getTrending()
        setMovieList(response)
    }

    const slideRight = () => {
        imageRef.current.scrollLeft += screenWidth - 110
    }

    const slideLeft = () => {
        imageRef.current.scrollLeft -= screenWidth + 110
    }


    return (
        <>
        <HiChevronLeft className='text-white hidden md:block text-[30px] absolute mx-8 mt-[155px] cursor-pointer' onClick={slideLeft}/>   
        <HiChevronRight className='text-white hidden md:block text-[30px] absolute mx-8 mt-[155px] cursor-pointer right-0' onClick={slideRight}/> 

        <div className='flex overflow-x-auto w-full px-16 py-4 no-scrollbar scroll-smooth' ref={imageRef}>
            {movieList.map((movie, index) => {
                return <img src={IMAGE_BASE_URL + movie.backdrop_path} key={index} alt='movie'
                    className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-lg
                    hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out' />
            })
            }
        </div>
        </>
    )
}

export default Slider
