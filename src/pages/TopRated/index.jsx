import React from "react";
import Helmet from "react-helmet";
import { Error, Loader, MoviesList } from "../../components";
import { useFecthAtCategoryPage } from "../../hooks/moviesHooks";
import { endPoints } from "../../utils/endpoints";

const TopRated = () => {
    const { movies, loading, error } = useFecthAtCategoryPage(
        endPoints.topRatedMovies
    );
    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    return (
        <>
            <Helmet>
                <title>Movify - Top rated movies</title>
            </Helmet>
            <section>
                <div className="container">
                    <h1 className="title-label">Top Rated Movies:</h1>
                    <div>
                        <MoviesList movies={movies} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default TopRated;
