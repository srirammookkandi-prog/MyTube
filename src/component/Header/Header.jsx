import { MENU_LOGO, SEARCH_API } from "../../utility/constants"
import logo from "../../assest/logo.png"
import { Search, UserRound } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Togglesidebar } from "../../utility/store/slice/toggleslidebar";
import { useEffect, useState } from "react";
import { cache } from "../../utility/store/slice/Search";

const Header = () => {
    const [search, setSearch] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false)
    const searchCache = useSelector((store) => store.cache);
    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[search]) {
                setSuggestion(searchCache[search]);
            }
            else {
                getSearchSuggestion();
            }
        }, 200)
        return () => { clearTimeout(timer) };
    }, [search]);

    const getSearchSuggestion = async () => {
        console.log("API-called" + search);
        const data = await fetch(SEARCH_API + search)
        const json = await data.json()
        setSuggestion(json[1]);
        dispatch(cache({ [search]: json[1] }));
    }

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
                <input className="border border-black rounded-l-full w-1/2 py-1 px-4"
                    placeholder="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={() => setShowSuggestion(true)}
                    onBlur={() => setShowSuggestion(false)} />
                <button className="rounded-r-full border py-1 px-4 border-black">Search</button>
                {showSuggestion && (<div className="absolute m-2 bg-white w-[360px] shadow-lg border border-gray-300 rounded-lg">
                    <ul className="mx-4 my-2">
                        {suggestion.map((s) => <li key={s} className="flex items-center gap-2 shadow-sm cursor-pointer hover:bg-gray-200"><Search size={15} />{s}</li>)}
                    </ul>
                </div>)}
            </div>
            <div className="m-2">
                <UserRound className="m-2" />
            </div>
        </div>
    )
}
export default Header
