import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdInfoOutline } from "react-icons/md";
import FactCheckModal from "../modals/FactCheck/FactCheckModal";

const FactCheckCard = ({ card = {} }) => {
  const [ClickToSee, setClickToSee] = useState(false);

  return (
    <article
      className="
        bg-white
        rounded-3xl
        border border-yellow-300
        shadow-xl
        overflow-hidden
        cursor-pointer
        transition-all duration-300
        hover:shadow-2xl
        w-full
      "
    >
      <div
        onMouseEnter={() => setClickToSee(true)}
        className="flex flex-col md:flex-row items-stretch"
      >
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="flex items-center gap-1 text-red-500 text-sm">
              <MdInfoOutline className="text-lg" />
              MYTH
            </span>

            <span className="bg-blue-800 text-white text-xs px-3 py-1 rounded-lg">
              Solar Energy
            </span>
          </div>

          <p className="text-sm leading-relaxed text-gray-900 wrap-break-word">
            <span className="text-red-500 font-semibold">{card.highlight}</span>{" "}
            {card.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-3">
            {(card.tags || ["Solar Energy"]).map((tag, i) => (
              <span
                key={i}
                className="bg-yellow-300 text-black text-xs px-4 py-1 rounded-full whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            // onClick={() => setClickToSee(true)}
            className="flex items-center gap-2 text-blue-800 font-semibold text-sm mt-3"
          >
            Click see the facts
            <AiOutlineArrowRight className="text-lg" />
          </div>
        </div>

        <div className="w-full md:w-[40%] h-[260px] md:h-[270px]">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full p-3 object-cover rounded-3xl"
          />
        </div>
      </div>

      <FactCheckModal isOpen={ClickToSee} onClose={setClickToSee} data={card} />
    </article>
  );
};

export default FactCheckCard;
