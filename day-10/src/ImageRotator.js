import React from "react";

const ImageRotator = () => {

    const images = [
        "https://picsum.photos/id/1024/500/300",
        "https://picsum.photos/id/1025/500/300",
        "https://picsum.photos/id/1027/500/300",
        "https://picsum.photos/id/1035/500/300"
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

    // Image ka rotation angle
    const [angle, setAngle] = React.useState(0);

    const previousImage = () => {

        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }

    };

    const nextImage = () => {

        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }

    };

    const rotateLeft = () => {
        setAngle(angle - 30);
    };

    const rotateRight = () => {
        setAngle(angle + 30);
    };

    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "50px"
            }}
        >

            <h1>Image Rotator</h1>

            <img
                src={images[currentIndex]}
                alt="Image Rotator"
                width="500"
                height="300"
                style={{
                    transform: `rotate(${angle}deg)`,
                    transition: "0.3s"
                }}
            />

            <br />
            <br />

            <button onClick={rotateLeft}>
                ← Rotate
            </button>

            <button onClick={rotateRight}>
                Rotate →
            </button>

        </div>
    );
};

export default ImageRotator;