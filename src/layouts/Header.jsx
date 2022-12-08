import logo from "../assets/logo.png"
import { UserAuth } from "../context/AuthContext"
import MobileHeader from "../components/PageData/Header/MobileHeader"
import DesktopHeader from "../components/PageData/Header/DesktopHeader"

const Header = () => {

    const { user } = UserAuth();

    return (
        <>
            <DesktopHeader user={user} logo={logo} />
            <MobileHeader user={user} logo={logo} />
        </>
    )
}

export default Header