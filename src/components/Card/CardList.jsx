import Card from "./Card.jsx"
import './card.css'

export default function CardList(props) {

    const handleVideoOnLoaded = props.handleVideoOnLoaded;
    const chars = ['hutao', 'mualani', 'navia', 'raiden', 'yaeMiko']

    return (
        <div className="flex w-full min-h-screen card-list">
            <div className="relative">
                <div className="bg">
                    <img src="../src/assets/logo/Genshin-Impact-Logo.webp" alt="genshin logo" className="genshin-logo" />
                </div>
            </div>
            {chars.map((char, index) => (
                <Card key={index+1} char={char} handleVideoOnLoaded={handleVideoOnLoaded}/>
            ))}
        </div>
    )
}