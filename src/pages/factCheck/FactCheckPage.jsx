import React, { useState } from "react";
import FactSearch from "../../components/features/FactSearch";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import FactCheckCard from "../../components/features/FactCheckCard";

import img from "../../assets/images/img.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";

const localImages = [img, img2, img3, img4];

const sampleCards = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: "Solar Energy Myth",
  img: localImages[i % localImages.length],

  highlight: "Solar panels don’t work at night — Myth!",
  description:
    "Solar panels stop producing electricity after sunset, leading people to believe they are ineffective.",
  fact:
    "Solar panels generate electricity during the day, reducing grid usage. Excess energy can be stored or exported.",
  source: "https://www.energy.gov/solar",
  tags: ["Solar", "Renewable", "CleanTech"],
}));

const FactCheckPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 6;

  const totalPages = Math.ceil(sampleCards.length / pageSize);
  const paginatedCards = sampleCards.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  return (
    <div className="min-h-screen bg-[#111111] text-gray-900 overflow-x-hidden">
      <section className="relative bg-[#0005A3] min-h-[400px] pt-20 pb-40 rounded-b-[40%]">
        <h1 className="text-6xl font-bold text-white text-center">
          CLEANTECH FACT-CHECK
        </h1>
        <p className="text-xl text-white text-center mt-5">
          Debunking myths with verified data
        </p>
      </section>

      <div className="relative z-20 -mt-40">
        <FactSearch />
      </div>

      <main className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {paginatedCards.map((card) => (
            <FactCheckCard key={card.id} card={card} />
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between">
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            <BsArrowLeft size={28} />
          </button>

          <button
            disabled={currentPage === totalPages - 1}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            <BsArrowRight size={28} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default FactCheckPage;
