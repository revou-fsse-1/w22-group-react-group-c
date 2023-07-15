import React, { useState } from "react";
import { Button, Carousel } from "@material-tailwind/react";
export default function CarouselComponent() {
  const images = [
    "/logo-navbar.png",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => {
      if (prevImage === 0) {
        return images.length - 1;
      } else {
        return prevImage - 1;
      }
    });
  };

  const translateX = -currentImage * 100; // Adjust the slide width based on your design

  return (
    <>
      {/* <div
        className="relative overflow-hidden"
        style={{ width: "100%", height: "100%" }}
      >
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Carousel Image"
              className="w-full"
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between">
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-gray-900 bg-opacity-50 text-white focus:outline-none"
          >
            Prev
          </button>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-gray-900 bg-opacity-50 text-white focus:outline-none"
          >
            Next
          </button>
        </div>
      </div> */}
      <Carousel className="rounded-xl h-96">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </>
  );
}
