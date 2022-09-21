
import MediaCard from "../components/MediaCard";

const SearchResults = ({ movie, query }) => {



    return (
        <div>
            <div className="text-white">
                <div className="flex flex-col justify-center items-center my-10">
                    <div>
                        <h1>Search Results</h1>

                        {
                            movie.length > 0
                                ? (

                                    <div id="card" className="flex justify-center sm:flex-row gap-4 flex-wrap px-10 lg:px-48 mb-10">

                                        {movie.map((singleMovie) => (

                                            singleMovie.media_type === "person"
                                                ?
                                                <></>
                                                :
                                                <MediaCard movie={singleMovie} />

                                        ))}

                                    </div>

                                ) : (

                                    <div className="flex flex-col items-center gap-4 flex-wrap p-10 mb-10">

                                        <p>No result found!</p>

                                    </div>
                                )
                        }
                    </div>
                </div>




            </div>
        </div>
    )
}

export default SearchResults
