import { useRef } from "react"

export default function Card(props) {
    const {char, charTitle, charDescription, handleVideoOnLoaded} = props;
    const videoRef = useRef(null);

    function handleMouseEnter() {
        if (videoRef.current) {
            videoRef.current.play(); // Play the video on hover
        }
    }

    function handleMouseLeave() {
        if (videoRef.current) {
            videoRef.current.pause(); // Pause the video when not hovered
        }
    }

    return (
        <div className="relative card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="videoWrapper">
                <video
                    ref={videoRef}
                    loop 
                    muted
                    playsInline
                    id={char}
                    preload="auto"
                    onLoadedData={handleVideoOnLoaded}
                >
                <source src={`../src/assets/video/${char}.mp4`} type="video/mp4" />

                Your browser does not support the video tag.
                </video>
            </div>
            <div className="card-text absolute w-full">
                <h1>{charTitle}</h1>
                <p>{charDescription}</p>
            </div>
        </div>
    )
}