//type 'rfce' to get the basic react layout
//{/* title */}//this will have titles like 'trending now' 'top rated' etc
//{/* container -> posters */}//this will have multiple posters under various titles
import React, { useState, useEffect } from 'react'
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);//its an empty array inside the useState()
    //this is a 'State'. It's used to store info for a short period of time which then erases on refreshing the page
    //it's used in react. Above is the syntax of writing a state 

    //A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        //if [] are empty, then run once when row loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);//to make a request to the entered URL
            console.log(request);//to see the data structure we are getting after making an api request
            setMovies(request.data.results);
            return request;            
        }
        fetchData();
    }, [fetchUrl]);//fetchUrl has to be included here bcoz its a dependancy now as it was included in the Row() above
    
    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {/* this will contain several row__poster(s) */}

                {movies.map(movie => (
                    <img 
                    className="row__poster"
                    src={`${base_url}${movie.poster_path}`}
                    alt={movie.name}
                    />
                ))}
            </div> 
        </div>
    )
}

export default Row
