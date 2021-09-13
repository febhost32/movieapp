import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../constants/constants";
import MovieCard from '../components/moviecard';
import { Typography, Paper, Grid, makeStyles } from '@material-ui/core';

const Home = () => {

    const [listMovie, setListMovie] = useState([]);

    const getMovie = () => {
        axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`).then(res => setListMovie(res.data));
    }
    useEffect(() => {
        getMovie();
    },[]);

    const useStyles = makeStyles ({
        root: {
            maxWidth: 345,
          },
          media: {
            height: 140,
          },
    });
    
    const classes = useStyles();
    //Todo : Create Card component, Make Card component contain each value of API, Done
        //useEffect is a function call after the DOM is loaded
        //Add CSS Styling , No need for this one
        //Move API Calls into Services using Redux, Next Time.
        //Bonus point if you can do from input
        

    return (
        <Paper className={classes.root}>
        

            <Typography variant ="h5" component = "h3"> 
            Movie Database
            </Typography>

            <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
            {listMovie.results && listMovie.results.map((item, index) => {
                return(
                <div key={index}><MovieCard data={item} />
                </div>
               
                );
            })}
            
            </Grid>
        

        
        </Paper>
        
        

    );

}

export default Home;