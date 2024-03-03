import React from "react";
import { useTranslation } from "react-i18next";

const TrailerTilte = ({ trailerInfo }) => {
  const { t } = useTranslation("navbar");
  return (
    <div className="absolute z-10 text-white top-[30%] bottom-[50%] left-10">
      <h1 className="text-[60px] font-bold">{trailerInfo?.original_title}</h1>
      <span className="text-xl w-1/3 block font-semibold">
        {trailerInfo?.overview}
      </span>
      <div className="flex mt-6">
        <button className="py-3 px-6 mr-6 bg-white rounded-md text-black">
          {t("PLAY")}
        </button>
        <button className="py-3 px-6 bg-slate-700 rounded-md">
          {t("MORE_INFO")}
        </button>
      </div>
    </div>
  );
};

export default TrailerTilte;
