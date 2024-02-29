import React from "react";

const TrailerTilte = ({ trailerInfo }) => {
  return (
    <div className="absolute z-10 text-white top-[30%] bottom-[50%] left-10">
      <h1 className="text-[60px] font-bold">{trailerInfo?.original_title}</h1>
      <span className="text-xl w-1/2 block font-semibold">
        {trailerInfo?.overview}
      </span>
      <div className="flex mt-6">
        <button className="py-3 px-6 mr-6 bg-white rounded-md text-black">
          Play
        </button>
        <button className="py-3 px-6 bg-slate-700 rounded-md">More info</button>
      </div>
    </div>
  );
};

export default TrailerTilte;
