import React, { useEffect, useState } from 'react'
import { YouTUBE_VIDEO_API } from '../../../../utility/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [video, setVideo] = useState([]);
    useEffect(() => { getVideos(); }, []);
    const getVideos = async () => {
        const data = await fetch(YouTUBE_VIDEO_API);
        const json = await data.json();
        setVideo(json.items)
    }

    return (video &&
        <div className='flex flex-wrap justify-between'>
            {video.map(video => <Link key={video.id} to={"/watch?v=" + video.id}><VideoCard info={video} /></Link>)}
        </div>
    )
}

export default VideoContainer
