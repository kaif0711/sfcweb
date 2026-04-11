import React, { useState } from "react";
import bg from "../../assets/images/PodcastBg.png";
import curve from "../../assets/images/curve1.webp";
import SearchInput from "../../components/ui/SearchInput";
import SelectDropdown from "../../components/ui/SelectDropdown";
import { IoMdArrowDown } from "react-icons/io";
import Button from "../../components/ui/Button";
import GalleryCard from "../../components/features/GalleryCard";
import img from "../../assets/images/img.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import PodcastCard from "../../components/features/PodcastCard";
import PodcastProfileModal from "../../components/modals/product/PodcastModal";

const localImages = [img, img2, img3, img4];
const sampleCards = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: ["Party Night", "DJ Blast", "Neon Party", "Festival Show"][i % 4],
  subtitle: "Lorem ipsum dolor sit amet",
  profession: "Tech talk daily",
  location: "San Fransisco, CA",
  podcast: "Podcast",
  img: localImages[i % localImages.length],
}));

const PodcastPage = () => {
  const [filteredResults, setFilteredResults] = useState(sampleCards);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenVideo = (video) => {
    setSelectedVideo(video);
    setIsOpen(true);
  };
  const pageSize = 6;
  const totalPages = Math.ceil(filteredResults.length / pageSize);
  const [currentPage, setCurrentPage] = useState(0);

  const cards = filteredResults.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  const onNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const onPrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };
  return (
    <main className=" bg-white min-h-screen relative">
      {/* ================= BACKGROUND CURVE ================= */}
      <div className="relative w-full overflow-hidden">
        {/* IMAGE — BIGGER HEIGHT */}
        <img
          src={bg}
          className="
      w-full
      h-[580px]
    "
          alt="curve"
        />

        {/* ================= PAGE TITLE + FILTER ================= */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 pt-1 gap-3 sm:gap-8 md:gap-10">
          {/* TITLE */}
          <div className="text-center">
            <h1
              className="
          text-lg
          sm:text-xl
          md:text-3xl
          lg:text-5xl
          xl:text-6xl
          font-bold
          text-white
          text-center
        "
            >
              Lorem ipsum dolor sit amet
            </h1>

            <p
              className="
          text-white
          mt-1 sm:mt-2
          text-[11px]
          sm:text-xs
          md:text-base
          lg:text-xl
          xl:text-2xl
          text-center
        "
            >
              Podcasters, journalists, broadcasters, and creators.
            </p>
          </div>

          {/* ================= FILTER BAR BOX ================= */}
          <div
            className="
        w-full
        max-w-5xl
        px-4
        py-4 sm:py-5 md:py-12
        text-white
        mt-0
      "
          >
            <SearchInput
              placeholder="Search by title, description and city..."
              bgColor="none"
              borderColor="border-white"
              rounded={true}
              iconPosition="left"
              width="w-full"
            />

            <div
              className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-3 sm:gap-4 md:gap-8
          items-end
          mt-2
          md:mt-6
        "
            >
              {/* Media Type */}
              <div>
                <label className="text-[11px] sm:text-xs font-semibold text-white">
                  Media Type
                </label>
                <SelectDropdown
                  defaultLabel="All"
                  options={[
                    { label: "Mumbai", value: "Mumbai" },
                    { label: "Delhi", value: "Delhi" },
                    { label: "Chennai", value: "Chennai" },
                  ]}
                  bgColor="white"
                  textColor="white"
                  borderColor="border-white"
                  placeholderColor="text-white"
                  extraClasses="mt-3"
                  rounded={true}
                  arrowIcon={<IoMdArrowDown className="w-4 h-4" />}
                  height="h-9 sm:h-10 md:h-11"
                  width="w-full"
                />
              </div>

              {/* Location */}
              <div>
                <label className="text-[11px] sm:text-xs font-semibold text-white">
                  Location
                </label>
                <SelectDropdown
                  defaultLabel="All Location"
                  options={[
                    { label: "Mumbai", value: "Mumbai" },
                    { label: "Delhi", value: "Delhi" },
                    { label: "Chennai", value: "Chennai" },
                  ]}
                  bgColor="white"
                  textColor="white"
                  borderColor="border-white"
                  placeholderColor="text-white"
                  extraClasses="mt-3"
                  rounded={true}
                  arrowIcon={<IoMdArrowDown className="w-4 h-4" />}
                  height="h-9 sm:h-10 md:h-11"
                  width="w-full"
                />
              </div>

              {/* Organization */}
              <div>
                <label className="text-[11px] sm:text-xs font-semibold text-white">
                  Organizstion
                </label>
                <SelectDropdown
                  defaultLabel="Select"
                  options={[
                    { label: "Mumbai", value: "Mumbai" },
                    { label: "Delhi", value: "Delhi" },
                    { label: "Chennai", value: "Chennai" },
                    { label: "Mumbai", value: "Mumbai" },
                    { label: "Delhi", value: "Delhi" },
                    { label: "Chennai", value: "Chennai" },
                  ]}
                  bgColor="white"
                  textColor="white"
                  borderColor="border-white"
                  placeholderColor="text-white"
                  extraClasses="mt-3"
                  rounded={true}
                  arrowIcon={<IoMdArrowDown className="w-4 h-4" />}
                  height="h-9 sm:h-10 md:h-11"
                  width="w-full"
                />
              </div>

              {/* Button */}
              <div className="flex items-end">
                <Button
                  text="Search"
                  width="w-full"
                  height="h-10 sm:h-11 md:h-12"
                  radius="rounded-tl-xl rounded-br-xl"
                  textColor="text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================== PODCASTS =========================== */}
      <main className="max-w-8xl mx-auto mt-6">
        <div className="bg-white rounded-4xl shadow p-8">
          {/* RESULT COUNT */}
          <div className="flex items-start justify-start">
            <p className="text-blue-800 text-[10px] sm:text-[16px] font-semibold">
              Showing 8 Contact Found
            </p>
          </div>
          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {cards.map((item) => (
              <PodcastCard key={item.id} card={item} onOpen={handleOpenVideo} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
            {/* DOTS */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all ${
                    i === currentPage
                      ? "w-3 h-3 bg-yellow-400"
                      : "w-2 h-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* ARROWS */}

            <div className="flex items-center gap-6 order-3">
              <button
                onClick={onPrev}
                disabled={currentPage === 0}
                className="w-12 h-12 border-2 rounded-full flex items-center justify-center border-yellow-400 bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-transparent hover:text-yellow-400 transition"
              >
                <BsArrowLeft size={24} />
              </button>
              <button
                onClick={onNext}
                disabled={currentPage === totalPages - 1}
                className="w-12 h-12 border-2 rounded-full flex items-center justify-center border-yellow-400 bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-transparent hover:text-yellow-400 transition"
              >
                <BsArrowRight size={24} />
              </button>
            </div>
          </div>

          {/* CURVE */}
          <div className="flex justify-center">
            <img
              src={curve}
              className="w-[60%] h-auto -mb-8 text-[#111111]"
              alt=""
            />
          </div>
        </div>
      </main>
      <PodcastProfileModal
        isOpen={isOpen}
        onClose={setIsOpen}
        video={selectedVideo}
      />
    </main>
  );
};

export default PodcastPage;
