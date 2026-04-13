import React, { useState } from "react";
import Gallery3DCarousel from "../../components/features/Gallery3DCarousel";
import SearchFilterBar from "../../components/features/SearchFilterBar";
import GalleryCard from "../../components/features/GalleryCard";
import img from "../../assets/images/img.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import VideoModal from "../../components/modals/VideoModal";
import curve from "../../assets/images/curve1.webp";
import Button from "../../components/ui/Button";

// ===== STATIC DATA FOR SEARCH =====
const localImages = [img, img2, img3, img4];
const sampleCards = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: ["Party Night", "DJ Blast", "Neon Party", "Festival Show"][i % 4],
  subtitle: "Lorem ipsum dolor sit amet",
  city: ["Mumbai", "Delhi", "Pune"][i % 3],
  img: localImages[i % localImages.length],
}));

const HomePage = () => {
  const [filteredResults, setFilteredResults] = useState(sampleCards);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpenVideo = (video) => {
    setSelectedVideo(video);
    setIsOpen(true);
  };

  const pageSize = 6; // ek slide me 6 cards
  const totalPages = Math.ceil(filteredResults.length / pageSize);
  const [currentPage, setCurrentPage] = useState(0);

  const paginatedCards = filteredResults.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-gray-900 font-sans">
      {/* =========================== HERO =========================== */}
      <section
        className="
    relative bg-white 
    h-[330px] 
    xs:h-[420px]
    sm:h-[480px]
    md:h-[520px]
    lg:h-[550px]
    pt-5 lg:pt-24
    rounded-b-[10%]
    sm:rounded-b-[50%]
    md:rounded-b-[40%]
    lg:rounded-b-[35%]
    xl:rounded-b-[30%]
  "
      >
        {/* TEXT */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold">
            Solar Fight Club
          </p>

          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Lorem ipsum dolor sit amet
          </h1>

          <p
            className="mt-3 sm:mt-4 text-gray-600 max-w-md sm:max-w-xl mx-auto 
                text-base sm:text-lg leading-relaxed"
          >
            Lorem ipsum dolor sit amet Lorem ipsum{" "}
            <br className="hidden sm:block" />
            dolor sit amett
          </p>
        </div>

        {/* 3D CAROUSEL */}
        <div className="relative z-20 -mt-14  ">
          <Gallery3DCarousel />
        </div>
      </section>

      {/* =========================== CURVED SEARCH BAR =========================== */}
      <div className="mt-42 relative z-30">
        <SearchFilterBar
          data={sampleCards}
          cityOptions={["Mumbai", "Delhi", "Pune"].map((c) => ({
            label: c,
            value: c,
          }))}
          sortOptions={["Newest", "Oldest"].map((s) => ({
            label: s,
            value: s,
          }))}
          onResults={setFilteredResults}
        />
      </div>

      {/* =========================== GALLERY =========================== */}
      <main className="max-w-8xl mx-auto mt-20">
        <div className="bg-white rounded-4xl shadow p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedCards.map((item) => (
              <GalleryCard key={item.id} card={item} onOpen={handleOpenVideo} />
            ))}
          </div>

          {/* PAGINATION / CONTROLS */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 mb-5">
            {/* DOTS */}
            <div className="order-1 sm:order-1 flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all 
            ${
              i === currentPage
                ? "w-3 h-3 bg-yellow-400"
                : "w-2 h-2 bg-gray-300"
            }`}
                ></div>
              ))}
            </div>

            {/* BUTTON */}
            <Button
              text="View Full Gallery"
              extraClasses="order-2 sm:order-2 shadow-md"
              width="w-full sm:w-auto"
              height="h-auto"
              padding="px-6 py-3 sm:px-8 sm:py-3 ml-0 sm:ml-18"
              textSize="text-lg sm:text-xl"
              rounded={true}
            />

            {/* ARROWS */}
            <div className="flex items-center gap-6 order-3">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="w-12 h-12 border-2 rounded-full flex items-center justify-center border-yellow-300 bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-transparent hover:text-yellow-400 transition"
              >
                <BsArrowLeft size={24} />
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className="w-12 h-12 border-2 rounded-full flex items-center justify-center border-yellow-300 bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-transparent hover:text-yellow-400 transition"
              >
                <BsArrowRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={curve}
              className="w-[60%] h-auto -mb-8 text-[#111111]"
              alt=""
            />
          </div>
        </div>
      </main>
      <VideoModal isOpen={isOpen} onClose={setIsOpen} video={selectedVideo} />
    </div>
  );
};

export default HomePage;
