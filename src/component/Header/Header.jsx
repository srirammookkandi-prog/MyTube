import { MENU_LOGO } from "../../utility/constants"
import logo from "../../assest/logo.png"
import { UserRound } from "lucide-react";

const Header = () => {
    return (
        <div className="flex">
            <div className="flex justify-between">
                <img className="w-8" alt="Menu Logo" src={MENU_LOGO} />
                <img className="w-40" alt="App Logo" src={logo} />
            </div>
            <div>
                <input placeholder="search" />
                <span>Search</span>
            </div>
            <div>
                <UserRound />
            </div>

        </div>
    )
}

export default Header
