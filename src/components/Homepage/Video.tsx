import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Video() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div>
      {domLoaded && (
        <div className="mt-10">
          <ReactPlayer
            muted={true}
            loop={true}
            playing={true}
            url="https://youtu.be/D-Ts7JfYVoU"
            width="80%"
            height="80%"
            className="absolute top-[40rem] md:top-[51rem] left-11 md:left-28"
          />
        </div>
      )}
    </div>
  );
}
