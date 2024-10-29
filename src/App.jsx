import { useEffect, useState } from "react";
import LoadingPage from "./components/LoadingPage/LoadingPage"
import CardList from "./components/Card/CardList";

function App() {
    const [loadingScreen, setLoadingScreen] = useState(true);

    function handleVideoOnLoaded() {
        const loadingTimeout = setTimeout(() => {
            setLoadingScreen(false);
        }, 3000);

        // Clean up timeout when the component unmounts
        return () => clearTimeout(loadingTimeout);
    }
    
    return (
        <div className="relative">
            <main className="bg-black w-screen h-screen z-0">
                <CardList handleVideoOnLoaded={handleVideoOnLoaded} />
            </main>
            {loadingScreen && <LoadingPage /> }
        </div>
    )
}

export default App
