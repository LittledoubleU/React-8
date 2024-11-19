import './loading.css'
import { motion, transform } from "framer-motion"

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

    const dotDelay = [0, 1.5, 3];

    const dotLoadingAnimation = {
        hidden: {
            y: "0"
        },
        show: (index) => ({
            y: "-7.5%",
            transition: {
                delay: dotDelay[index],   // Delay each dot by 0.2 seconds times its index
                duration: 1,
                ease: "easeInOut",          // Duration of the animation
                repeat: Infinity,     // Repeat the animation indefinitely
                repeatType: "mirror"   // Loop the animation
            },
        })
    };
      

    return (
        <div className="w-screen h-screen z-50 absolute loading-page bg-white">
            <div className="absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-full">
                <img src="/assets/loading/WalkingGirl.gif" alt="Walking girl" className="loading-waifu"/>
                <div className=' border-4 loading-progress rounded-full overflow-hidden relative'>
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
                <div className='loading-text relative'>
                    LOADING
                    <div className='loading-dot absolute'>
                    {dotDelay.map((_, index) => (
                        <motion.span
                        key={index}
                        initial="hidden"
                        animate="show"
                        variants={dotLoadingAnimation}
                        custom={index}
                        className='absolute'
                        >
                        .
                        </motion.span>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}