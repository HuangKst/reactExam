import React from "react";
import { getTrendingTodayMovies } from "../api/tmdb-api";
import PageTempate from '../components/templateMovieListPage'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";


const TrendingPage = ()=>{
    const {data,error,isLoading,isError} = useQuery('discover',getTrendingTodayMovies);
    if(isLoading){
        return<Spinner/>
    }

     if (isError){
        return <h1>{error.message}</h1>
     }
    const movies = data.results;

    return (
        <PageTempate
            title="Trending Today"
            movies={movies}
            action={(movie)=>{
                return(
                    <>
                        <RemoveFromFavorites/>
                        <WriteReview movie={movie}/>
                    </>
                )
            }

            }
        />
    );

}

export default TrendingPage;