import ReactPaginate from "react-paginate";

const Pagination = ({ setPage, totalPages, handlePageChange }) => {

    return (
        <div>
            <div className="flex">
                <ReactPaginate
                    className="flex gap-1"
                    activeClassName="rounded border-0 bg-yellow-400 outline-none transition-all duration-300 rounded text-black hover:text-white hover:bg-white shadow-md focus:shadow-md"
                    previousClassName="relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    nextClassName="relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    pageLinkClassName="relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    previousLinkClassName=""
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default Pagination
