
const Footer = () => {
    return (
        <div className="mt-auto">
            <div className="hidden sm:flex justify-center items-center bg-black h-16">
                <p className="tracking-[.20em] text-sm font-slogan text-gray-500 ">Copyright © 2022 Movie Home | Built & Designed by <a href="https://akhilkumar.ga/" className="text-gray-300 duration-300 hover:text-white hover:scale-105">Akhil</a>
                </p>
            </div>
            <div className="flex sm:hidden flex-col justify-center gap-1 items-center bg-black h-16">
                <p className="text-sm font-slogan text-gray-500">Copyright © 2022 Movie Home</p>
                <p className="text-sm font-slogan text-gray-500">Built & Designed by <a href="https://akhilkumar.ga/" className="text-gray-300">Akhil</a>
                </p>

            </div>
        </div>
    )
}

export default Footer