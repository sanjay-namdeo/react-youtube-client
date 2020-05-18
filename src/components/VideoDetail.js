import React from "react";

const VideoDetail = ({video}) => {
    if(video==null) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className="ui embed">
            <iframe src={videoSrc} style={{width: "100"}} title={video.snippet.title}/>
        </div>
    );
};

export default VideoDetail;

