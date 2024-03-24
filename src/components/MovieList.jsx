import React, { useEffect, useState } from 'react'
import { getMovieByGenerId } from '../services/GlobalApi'
import MovieCard from './MovieCard'
const MovieList = ({ genreId }) => {
    const [movieList, setMovieList] = useState([])
    useEffect(() => {
        getMovieByGenerIdFun()
    }, [])

    const getMovieByGenerIdFun = async () => {
        const response = await getMovieByGenerId(genreId)
        console.log(response)
        setMovieList(response)
    }
    return (
        <div className='flex overflow-x-auto no-scrollbar gap-8 pt-5 px-3 pb-10'>
            {movieList.map((movie, index) => {
                return <MovieCard key={index} movie={movie} />
            })
            }
        </div>
    )
}

export default MovieList
