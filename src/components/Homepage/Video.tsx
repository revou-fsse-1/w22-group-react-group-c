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
          />
        </div>
      )}
    </div>
  );
}
