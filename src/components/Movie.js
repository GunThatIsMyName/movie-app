import PropTypes from "prop-types"
import "./Movie.css"
import {Link} from "react-router-dom"

function Movie({title,poster,summary,year,genres}){
    return (
        <Link to={{
            pathname:"/movie-detail",
            state:{
                year,
                title,
                genres,
                poster,
                summary,
            }
        }}>
            <div className="movie">
                <img className="movie__poster" src={poster} alt={title}/>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <p className="movie__summary">{summary}</p>
                    <h5 className="movie__year">film in {year}</h5>
                </div>
                <ul className="movie__genres">
                    {genres.map((genre,index)=><li key={index} className="movie__genre">{genre}</li>)}
                </ul>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    id:PropTypes.number,
    title:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
};


export default Movie;
