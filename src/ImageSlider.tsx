import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { log } from "console";


type ImageSliderProps = {
    images: {
        url: string
        alt: string
    }[]
}

export function ImageSlider({ images }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return images.length - 1;
            return index - 1;
        });
    }
    function showNextImage() {
        setImageIndex(index => {
            if (index === images.length - 1) return 0;
            return index + 1;
        });
    }

    return (
        <div id="slider">
            <section className="sliders-wrap">
                {images.map(img => (
                    <div className="slide" style={{ translate: `${-100 * imageIndex}%` }} >
                        <img src={img.url} />
                    </div>
                ))}
            </section>
            <div onClick={showPrevImage} className="button button-left"><ArrowBigLeft /></div>
            <div onClick={showNextImage} className="button button-right"><ArrowBigRight /></div>
        </div>
    )
}