import notFound from "../src/assets/NotFound.png"

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MOVIE = "https://api.themoviedb.org/3/movie/616037?api_key=ee67127aee04e49495754bf98fb61031"



const DetailedCard = ({ data }) => {

    return (
        <div>

            <div className="flex justify-center gap-10 flex-col items-start">
                <div>
                    <img
                        src={API_IMG + "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"}
                        alt="Thor: Love and Thunder"
                        className="object-fill h-60 rounded-md shadow-2xl shadow-black"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h1>Thor: Love and Thunder</h1>
                    <p className="text-slate-400 text-sm">After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.</p>
                    <div className="flex flex-col gap-1">
                        <p className="text-slate-400 text-sm">Country: <span className="text-white">United States of America</span></p>
                        <p className="text-slate-400 text-sm">Genre: <span className="text-white">Adventure, Fantasy</span></p>
                        <p className="text-slate-400 text-sm">Released: <span className="text-white">2022-07-06</span></p>
                        <p className="text-slate-400 text-sm">Production: <span className="text-white">Marvel, Studios</span></p>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default DetailedCard
