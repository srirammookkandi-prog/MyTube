import { MENU_LOGO } from "../../utility/constants"
import logo from "../../assest/logo.png"
import { UserRound } from "lucide-react";
import { useDispatch } from "react-redux";
import { Togglesidebar } from "../../utility/store/slice/toggleslidebar";
const Header = () => {
    const dispatch = useDispatch()
    const handleToggle = () => {
        dispatch(Togglesidebar());
    }
    return (
        <div className="flex justify-between m-4 shadow-lg">
            <div className="flex justify-between">
                <img onClick={handleToggle}
                    className="h-6 mx-2 mt-4" alt="Menu Logo" src={MENU_LOGO} />
                <img className="w-28" alt="App Logo" src={logo} />
            </div>
            <div className="w-1/2 m-2">
                <input className="border border-black rounded-l-full w-1/2 py-1 px-4" placeholder="search" />
                <button className="rounded-r-full border py-1 px-4 border-black">Search</button>
            </div>
            <div className="m-2">
                <UserRound className="m-2" />
            </div>
        </div>
    )
}

export default Header
