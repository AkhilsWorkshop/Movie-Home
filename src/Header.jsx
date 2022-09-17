import logo from "../src/assets/logo.png"

const Header = () => {



    return (
        <div>
            <div className="flex items-center justify-center bg-black h-20 shadow-xl">

                <a href="/">
                    <img src={logo} alt="Movie DB" className="h-20 py-2" />
                </a>

            </div>
        </div>
    )
}

export default Header