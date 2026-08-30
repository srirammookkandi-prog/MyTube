import { useDispatch } from "react-redux"
import { Closesidebar } from "../../utility/store/slice/toggleslidebar";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./Comments/CommentsContainer";


const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Closesidebar());
    }, [])

    return (
        <div className="flex flex-col">
            <div className="mx-4 my-2">
                <iframe width="1200"
                    height="600"
                    src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>
            <CommentsContainer />
        </div >
    )
}

export default WatchPage
