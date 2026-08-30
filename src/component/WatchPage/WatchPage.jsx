import { useDispatch } from "react-redux"
import { Closesidebar } from "../../utility/store/slice/toggleslidebar";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./Comments/CommentsContainer";
import LiveChat from "./LiveChat/LiveChat";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Closesidebar());
    }, [])

    return (
        <div className="flex flex-col w-full">
            <div className=" flex gap-2 mx-4 my-2">
                <iframe width="1000"
                    height="550"
                    src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
                <div className=" px-4 py-2 w-[450px] border border-black rounded-lg bg-slate-200">
                    <LiveChat />
                </div>
            </div>
            <CommentsContainer />
        </div >
    )
}

export default WatchPage
