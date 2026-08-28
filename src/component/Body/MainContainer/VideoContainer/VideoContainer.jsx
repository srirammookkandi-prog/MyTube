import React, { useEffect, useState } from 'react'
import { YouTUBE_VIDEO_API } from '../../../../utility/constants';
import VideoCard from './VideoCard';

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
            {video.map(video => <VideoCard info={video} />)}
        </div>
    )
}

export default VideoContainer
