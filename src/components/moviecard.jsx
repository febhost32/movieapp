import '../styles/moviecard.css'
import { MOVIE_IMAGE_URL } from '../constants/constants';

const MovieCard = ({...props}) => {
    const {data} = props;
    
    return (
        
    <div className='card-container'>
        
        <div className='card-image'>

            <img src = {`${MOVIE_IMAGE_URL}${data.backdrop_path}`}></img>

        </div>

        <p>{data.title}</p>

    </div>
    

    )

}



export default MovieCard;