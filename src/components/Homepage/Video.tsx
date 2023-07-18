import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Video() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div>
      {/* <div>
        {domLoaded && (
          <div className="mt-10">
            <ReactPlayer
              muted={true}
              loop={true}
              playing={true}
              url="https://youtu.be/D-Ts7JfYVoU"
              width="80%"
              height="80%"
              className=""
            />
          </div>
        )}
      </div> */}
      {domLoaded && (
        <div className="container mx-auto px-4">
          <div className="aspect-w-16 aspect-h-9">
            {/* Adjust aspect-w and aspect-h to your desired aspect ratio */}
            <div className="w-full">
              <ReactPlayer
                url="https://youtu.be/D-Ts7JfYVoU"
                width="80vw"
                height="75vh"
                playing={true}
                muted={true}
                loop={true}
                className="relative"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
