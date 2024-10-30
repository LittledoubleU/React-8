import Card from "./Card.jsx";
import './card.css';
import { motion } from "framer-motion";
import chars from "../../data.js"

export default function CardList(props) {
    const { handleVideoOnLoaded, loadingScreen } = props;

    // Framer Motion variants
    const parentContainer = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25, // delay between children animations
                delayChildren: 2.75 // delay before animate children
            }
        }
    };

    const childrenCard = {
        hidden: { 
            y: loadingScreen === false ? "100%" : "100%",
            transition: { duration: 0.01 }
        },
        show: { 
            y: loadingScreen === false ? "0%" : "0%",
            transition: { duration: 0.01 }
        }
    };

    return (
        <motion.div 
            className="flex w-full min-h-screen card-list"
            variants={parentContainer}
            initial="hidden"
            animate="show"
        >
            <motion.div 
                className="relative bg-white" 
                variants={childrenCard}
            >
                <div className="bg">
                    <img src="../src/assets/logo/Genshin-Impact.webp" alt="genshin logo" className="genshin-logo" />
                </div>
            </motion.div>

            {chars.map((char, index) => (
                <motion.div 
                    key={index + 1}
                    variants={childrenCard}  // Applying the animation variant
                >
                    <Card 
                        char={char.name} 
                        charTitle={char.title}
                        charDescription={char.description}
                        handleVideoOnLoaded={handleVideoOnLoaded}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
}
