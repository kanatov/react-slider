import "./index.css";
import "./App.css";
import { ImageSlider } from "./ImageSlider";
import photo1 from "./img/photo1.jpg";
import photo2 from "./img/photo2.jpg";
import photo3 from "./img/photo3.jpg";
import photo4 from "./img/photo4.jpg";
import photo5 from "./img/photo5.jpg";
import photo6 from "./img/photo6.jpg";
// import { setTextRange } from "typescript";


const IMAGES = [
    { url: photo1, alt: "Photo One" },
    { url: photo2, alt: "Photo Two" },
    { url: photo3, alt: "Photo Three" },
    { url: photo4, alt: "Photo Four" },
    { url: photo5, alt: "Photo Five" },
    { url: photo6, alt: "Photo Six" },
]

export default function App() {

    return (
        <ImageSlider images={IMAGES} />
    )
}

