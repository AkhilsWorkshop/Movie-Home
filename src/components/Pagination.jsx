import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs"

const Pagination = ({ numOfPages }) => {


    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px">


                    <li>
                        <h1>{numOfPages} Results</h1>
                    </li>



                </ul>
            </nav>


        </div>
    )
}

export default Pagination
