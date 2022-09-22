

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Main/Footer";
import Header from "../components/Main/Header";
import Loading from "../components/Main/Loading";
import MediaCard from "../components/MediaCard";
import Pagination from "../components/Pagination";
import { SEARCH_URL } from "../config/config";
import ReactPaginate from "react-paginate";


const SearchResults = () => {

    // const API = `${SEARCH_URL}${process.env.REACT_APP_API_KEY}&query=`

    // const [content, setContent] = useState([])
    // const [searchPages, setSearchpages] = useState("")
    // const [loading, setLoading] = useState(false)

    // // Getting the ID from URL
    // const { searchID } = useParams()

    // const fetchSearch = async () => {
    //     setLoading(true)
    //     const { data } = await axios.get(`${API}${searchID}`);
    //     console.log(data)
    //     setContent(data.results)
    //     setSearchpages(data.total_results)
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchSearch()
    // }, [])


    const API = `${SEARCH_URL}${process.env.REACT_APP_API_KEY}&query=`

    const [content, setContent] = useState([])
    const [searchPages, setSearchpages] = useState("")
    const [totalPages, setTotalPages] = useState("")
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    // Getting the ID from URL
    const { searchID } = useParams()

    const fetchSearch = async (page) => {
        setLoading(true)
        try {
            const { data } = await axios.get(`${API}${searchID}&page=${page}`);
            setContent(data.results)
            setSearchpages(data.total_results)
            setTotalPages(data.total_pages)
            setLoading(false)
            console.log("This is " + page)
        }
        catch (err) {
            console.log(err)

        }
    }

    useEffect(() => {
        fetchSearch()
    }, [])

    // const pageChange = async (page) => {
    //     let currentPage = page.selected + 1
    //     console.log(currentPage)
    //     console.log(page)

    // }

    const handlePageChange = (page) => {

        window.scroll(0, 0)
        let currentPage = page.selected + 1
        setPage(currentPage)
        fetchSearch(currentPage)
    }

    return (
        <div>
            <Header />
            <div className="text-white">
                <div className="flex flex-col justify-center items-center my-10">
                    {
                        loading ? (
                            <Loading />
                        )
                            :
                            (

                                <>

                                    <div className="mb-5">
                                        <h1 className="text text-lg tracking-widest font-bold">Search Results for {searchID} ({searchPages})</h1>
                                    </div>

                                    <div id="card" className="flex justify-center sm:flex-row gap-4 flex-wrap">

                                        {content.map((singleMovie, key) => (

                                            // singleMovie.media_type === "person"
                                            //     ?
                                            //     <></>
                                            //     :
                                            <MediaCard key={key} movie={singleMovie} />

                                        ))}

                                    </div>

                                </>


                            )
                    }
                    {
                        totalPages === 1 ?
                            <></>
                            :
                            <Pagination setPage={setPage} totalPages={totalPages} handlePageChange={handlePageChange} />

                    }
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default SearchResults
