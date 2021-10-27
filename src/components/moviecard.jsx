import '../styles/moviecard.css';
import { MOVIE_IMAGE_URL } from '../constants/constants';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const MovieCard = ({...props}) => {
    const {data} = props;
   
    const useStyles = makeStyles (theme => ({
        root: {
            maxWidth: 345,
          },
          media: {
            height: 140,
          },
    }));
    
    const classes = useStyles();

    return (
    
    <Card className= {classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={`${MOVIE_IMAGE_URL}${data.backdrop_path}`}
            title={data.title}
            />
            <CardContent>
                <Typography gutterBottom variant ="h5" component ="h2">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {data.overview}
                </Typography>                
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Learn More
            </Button>
        </CardActions>
    </Card>

    )

}



export default MovieCard;