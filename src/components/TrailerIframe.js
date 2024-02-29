import React from "react";

const TrailerIframe = ({ videoId }) => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0  bg-gradient-to-r from-black"></div>
      <iframe
        className="h-full w-full"
        title="youtube Video"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1`}
        allow=" autoplay;"
      ></iframe>
    </div>
  );
};

export default TrailerIframe;
