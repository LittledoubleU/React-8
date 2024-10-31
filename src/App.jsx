import { useEffect, useState } from "react";
import LoadingPage from "./components/LoadingPage/LoadingPage"
import CardList from "./components/Card/CardList";

function App() {
    const [loadingScreen, setLoadingScreen] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0); // track video load for using handleVideoOnLoaded once after reach all card.

    function handleVideoOnLoaded() {
        setLoadedVideos((prev) => prev + 1);
    }

    useEffect(() => {
        // If you want to make it dynamic. just use useState() for char.lenght = totalVideo
        if (loadedVideos === 5) { // Only hide loading screen once all videos are loaded
            const loadingTimeout = setTimeout(() => {
                setLoadingScreen(false);
            }, 3000);

            return () => clearTimeout(loadingTimeout);
        }
    }, [loadedVideos]);
    
    return (
        <div className="relative w-full h-screen overflow-hidden main-container">
            <main className="bg-black w-screen z-0">
                <CardList handleVideoOnLoaded={handleVideoOnLoaded} loadingScreen={loadingScreen}/>
            </main>
            {loadingScreen && <LoadingPage /> }
        </div>
    )
}

export default App
