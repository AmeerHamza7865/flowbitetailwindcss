import { useState,useEffect } from 'react';

const Slider=()=>{
    const [images, setImages] = useState([
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
    ]);



    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentIndex]);

    
    return (
        <div className="relative w-full">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <img
                    src={images[currentIndex]}
                    className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-opacity duration-3000 ease-in-out"
                    alt={`Slide ${currentIndex + 1}`}
                />
            </div>
            <div className="flex justify-center items-center pt-4">
                <button
                    type="button"
                    className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
                    onClick={handlePrev}
                >
                    <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                        <svg
                            className="rtl:rotate-180 w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 5H1m0 0 4 4M1 5l4-4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
                    onClick={handleNext}
                >
                    <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                        <svg
                            className="rtl:rotate-180 w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );

    // Auto move through images
    
}

export default Slider;