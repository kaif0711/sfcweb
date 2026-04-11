import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";

const GalleryCard = ({ card, onOpen }) => {
  return (
    <article
      onClick={() => onOpen && onOpen(card)}
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* IMAGE + PLAY + TIME BADGE */}
      <div className="relative w-full h-56">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover"
        />

        {/* CENTER PLAY BUTTON */}
        <div className="absolute inset-0 flex justify-center items-center">
          <AiFillPlayCircle className="w-16 h-16 text-yellow-400 hover:text-yellow-500 rounded-full flex justify-center items-center shadow-lg cursor-pointer" />
        </div>

        {/* TIME BADGE */}
        <div className="absolute bottom-3 right-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow">
          <MdOutlineWatchLater /> {card.time || "10:28"}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* TITLE */}
        <h3 className="text-lg font-bold text-gray-900 mb-1">{card.title}</h3>

        {/* SUBTITLE */}
        <p className="text-sm text-gray-600 leading-relaxed">{card.subtitle}</p>

        {/* TAGS */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {(card.tags || ["Energy Storage", "Energy Storage"]).map((tag, i) => (
            <span
              key={i}
              className="bg-blue-700 text-white text-xs px-4 py-1 rounded-lg shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default GalleryCard;
