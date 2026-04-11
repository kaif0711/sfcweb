import React from "react";
import Button from "../ui/Button";
import { BiBuildings } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";

const PodcastCard = ({ card, onOpen }) => {
  return (
    <article
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* IMAGE + PLAY + TIME BADGE */}
      <div className="relative w-full h-56">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* TITLE */}
        <h3 className="text-lg font-semibold text-gray-900 ">{card.title}</h3>

        {/* SUBTITLE */}
        <p className="text-sm text-gray-500 leading-relaxed">{card.subtitle}</p>

        <p className="text-sm text-black leading-relaxed flex items-center gap-2">
          <BiBuildings /> {card.profession}
        </p>

        <p className="text-sm text-black leading-relaxed flex items-center gap-2"><IoLocation />{card.location}</p>

        {/* TAGS */}
        <div className="flex gap-2 mt-2 flex-wrap ">
          <p className="bg-blue-700 text-white text-xs px-4 py-1 rounded-lg shadow-sm">
            {card.podcast}
          </p>
        </div>
        <div className="pt-3">
            <Button
             text="View Profile"
             radius="rounded-tl-xl rounded-br-xl"
             onClick={() => onOpen && onOpen(card)}
            />
        </div>
      </div>
    </article>
  );
};

export default PodcastCard;
