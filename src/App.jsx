import { useEffect, useState } from "react";
import LoadingPage from "./components/LoadingPage/LoadingPage"

function App() {
    const [loadingScreen, setLoadingScreen] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoadingScreen(false)
        }, 50000)
    }, [])
    return (
        <>
            {loadingScreen?<LoadingPage />: //if loadingscreen show loading page uwu
            <main className="bg-black w-screen h-screen z-0">

            </main>
            }
        </>
    )
}

export default App
