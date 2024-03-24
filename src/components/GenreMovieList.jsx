import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

const GenreMovieList = () => {
    return (
        <div>
            {GenresList.genere.map((item, index) => {
                return index < 4 && <div key={index} className='p-8 px-8 md:px-16'>
                    <h1 className='text-[20px] text-white font-bold'>{item.name}</h1>
                    <MovieList genreId={item.id} index_={index} />
                </div>
            })}
        </div>
    )
}

export default GenreMovieList
