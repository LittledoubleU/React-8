import './loading.css'
import { motion } from "framer-motion"

export default function LoadingPage() {
    const delays = [0, 1, 2];

    const loadingAnimation = {
        hidden: {
            left: '-100%', // Start off-screen to the left
        },
        show: (index) => ({
            left: '100%', // Move to off-screen to the right
            transition: {
                duration: 3, // Duration of the animation
                ease: "linear",
                repeat: Infinity, // Repeat the animation
                delay: delays[index], // Delay based on the index
            },
        }),
    };

    return (
        <div className="w-screen h-screen z-50 bg-slate-800 relative loading-page">
            <div className="absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-full">
                <img src="./src/assets/loading/WalkingGirl.gif" alt="Walking girl" className="loading-waifu"/>
                <div className='border-l-white border-4 loading-progress rounded-full overflow-hidden relative'>
                    {delays.map((_, index) => (
                    <motion.div 
                        key={index}
                        initial="hidden" 
                        animate="show"
                        variants={loadingAnimation}
                        custom={index}
                    />
                    ))}
                </div>
                <p className='loading-text'>LOADING...</p>
            </div>
        </div>
    )
}