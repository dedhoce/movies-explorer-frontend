import MoviesCard from "../MoviesCard/MoviesCard"
import './MoviesCardList.css'

export default function MoviesCardList({ constantMovies, isDelete, isSavedMovies }) {
    return (
        <div className="card-list">
            {constantMovies.map(({image, title, times}) => {
                return <MoviesCard key={title} image={image} title={title} times={times} isDelete={isDelete} isSavedMovies={isSavedMovies}/>
            })}
            
                       
        </div>
    )
}