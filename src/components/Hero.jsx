import { useRef, useState } from "react"

const Hero = () => {
    const [currentIndex, setcurrentIndex] = useState(1);
    const [hasClicked, sethasClicked] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [loadedVideos, setloadedVideos] = useState(0);

    const totalVideos=3;
    const nextVideoRef=useRef(null);

    const upComingIndex=(currentIndex%totalVideos)+1;
    const handleMiniVideoClick=()=>{
        sethasClicked(true);
        setcurrentIndex(upComingIndex);
    }
    const getVideoSrc=(index)=>`videos/hero-${index}.mp4`
    
    const handleVideoLoad=()=>{
        setloadedVideos((prev)=>prev+1)
    }
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
            <div>
                <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100" onClick={handleMiniVideoClick}>
                        <video loop muted ref={nextVideoRef} src={getVideoSrc(upComingIndex)} id="current-video" className="size-64 origin-center scale-150 object-cover object-center" onLoadedData={handleVideoLoad}></video>
                    </div>
                </div>
                <video ref={nextVideoRef} src={getVideoSrc(currentIndex)} loop muted id="next-video" className="absolute-center invisible absolute z-20 size-64 object-cover object-center" onLoadedData={handleVideoLoad}></video>
                <video src={getVideoSrc(currentIndex===totalVideos -1?1:currentIndex)} autoPlay loop muted className="absolute left-0 top-0 size-full object-cover object-center" onLoadedData={handleVideoLoad}></video>
            </div>
        </div>
    </div>
  )
}

export default Hero