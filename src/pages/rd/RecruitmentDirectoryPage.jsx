import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoMdArrowDown, IoMdMailUnread } from "react-icons/io";
import curve from "../../assets/images/bg1.png"; // your curved white shape
import SearchInput from "../../components/ui/SearchInput";
import SelectDropdown from "../../components/ui/SelectDropdown";
import Button from "../../components/ui/Button";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import card from "../../assets/images/RDcard.jpg";
import SubscribeoModal from "../../components/modals/RD/SubscribeModal";
import ViewDetailModal from "../../components/modals/RD/ViewDetailsModal";

const RecruitmentDirectoryPage = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    img: card,
    title: "Alabama Solar Industry",
    location: "Sydney, Australia",
    tags: ["Solar", "Engineering", "Energy"],
    for: "Leading solar energy recruitment specialists across Australia and Asia-Pacific. We connect",
    mail: "contact@sfc-events.com",
    call: "+61 2 9876 5432",
  }));

  return (
    <main className="bg-[#111111] text-white min-h-screen md:pb-12 pb-0 relative">
      {/* ================= BACKGROUND CURVE ================= */}
      <div className="relative w-full overflow-hidden">
        {/* IMAGE — BIGGER HEIGHT */}
        <img
          src={curve}
          className="
      w-full
      h-[480px]
      sm:h-[520px]
      md:h-[620px]
      lg:h-[720px]
      xl:h-[480px]
    "
          alt="curve"
        />

        {/* ================= PAGE TITLE + FILTER ================= */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
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
          text-black
          text-center
        "
            >
              Lorem ipsum dolor sit amet
            </h1>

            <p
              className="
          text-gray-600
          mt-1 sm:mt-2
          text-[11px]
          sm:text-xs
          md:text-base
          lg:text-xl
          xl:text-2xl
          text-center
        "
            >
              Myth-busting, insights, and stories from Cleantech.
            </p>
          </div>

          {/* ================= FILTER BAR BOX ================= */}
          <div
            className="
        max-w-4xl
        mx-auto
        px-4
        py-4 sm:py-5 md:py-6
        text-black
        mt-2
      "
          >
            <div
              className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-3 sm:gap-4 md:gap-8
          items-end
        "
            >
              {/* Company Name */}
              <div className="text-center">
                <label className="text-[11px] sm:text-xs font-semibold text-gray-900">
                  Company/ Recruiter Name
                </label>
                <SearchInput
                  placeholder="Enter company / recruiter name..."
                  bgColor="white"
                  borderColor="border-black"
                  rounded={true}
                  textColor="black"
                  icon={false}
                  extraClasses="mt-2"
                  height="h-9 sm:h-10 md:h-11"
                />
              </div>

              {/* Location */}
              <div className="text-center">
                <label className="text-[11px] sm:text-xs font-semibold text-gray-900">
                  Location
                </label>
                <SelectDropdown
                  defaultLabel="Location"
                  options={[
                    { label: "Mumbai", value: "Mumbai" },
                    { label: "Delhi", value: "Delhi" },
                    { label: "Chennai", value: "Chennai" },
                  ]}
                  bgColor="white"
                  textColor="black"
                  borderColor="border-black"
                  placeholderColor="text-gray-600"
                  extraClasses="mt-2"
                  rounded={true}
                  arrowIcon={<IoMdArrowDown className="w-4 h-4" />}
                  height="h-9 sm:h-10 md:h-11"
                  width="w-full sm:w-60"
                />
              </div>

              {/* Search */}
              <div className="text-center">
                <label className="text-[11px] sm:text-xs font-semibold text-gray-900">
                  Search
                </label>
                <SelectDropdown
                  defaultLabel="solar"
                  options={[
                    { label: "Mumbai", value: "Mumbai" },
                    { label: "Delhi", value: "Delhi" },
                    { label: "Chennai", value: "Chennai" },
                    { label: "Mumbai", value: "Mumbai" },
                    { label: "Delhi", value: "Delhi" },
                    { label: "Chennai", value: "Chennai" },
                    { label: "Mumbai", value: "Mumbai" },
                    { label: "Delhi", value: "Delhi" },
                  ]}
                  bgColor="white"
                  textColor="black"
                  borderColor="border-black"
                  placeholderColor="text-gray-600"
                  extraClasses="mt-2"
                  rounded={true}
                  arrowIcon={<IoMdArrowDown className="w-4 h-4" />}
                  height="h-9 sm:h-10 md:h-11"
                  width="w-full sm:w-60"
                />
              </div>
            </div>

            {/* RESULT COUNT */}
            <div className="flex items-start justify-start mt-3">
              <p className="text-blue-800 text-[10px] sm:text-[13px] font-semibold">
                showing 8 companies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CARD GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-16">
        <div className="flex justify-center sm:justify-end mb-5">
          <Button
            text="Subscribe"
            extraClasses="sm:w-auto"
            radius="rounded-tl-xl rounded-br-xl"
            onClick={() => setIsSubscribe(true)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-6 lg:gap-7">
          {(isMobile && !showAll ? cards.slice(0, 3) : cards).map((card) => (
            <div
              key={card.id}
              className="
        relative
        bg-[#1a1a1a]
        rounded-xl
        overflow-hidden
        text-center
        shadow-lg
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-1
      "
            >
              {/* Avatar */}
              <div className="flex justify-center mt-4">
                <div className="relative">
                  <img
                    src={card.img}
                    alt=""
                    className="
              w-28 h-28
              rounded-full
              object-cover
              ring-2 ring-yellow-400/80
              shadow-md
            "
                  />
                </div>
              </div>
              <div className="p-4 pt-2">
                <p className="text-yellow-400 text-sm sm:text-md flex items-center justify-center gap-1">
                  <IoLocationSharp /> {card.location}
                </p>
                <h3 className="text-lg sm:text-lg font-semibold uppercase mt-1">
                  {card.title}
                </h3>

                <div>
                  <p className="text-gray-300 text-sm mt-3">{card.for}</p>
                </div>

                <div className="flex text-center justify-center mt-4">
                  <a
                    href="https://www.solarfightnight.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto"
                  >
                    <Button
                      text="VIEW DETAILS"
                      radius="rounded-tl-xl rounded-br-xl"
                      padding="px-6 py-2"
                      textSize="text-sm"
                      height="h-fit"
                      width="w-fit"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isMobile && (
          <div className="flex justify-center mt-8">
            <Button
              text={showAll ? "Show Less" : "View More"}
              radius="rounded-tl-xl rounded-br-xl"
              onClick={() => setShowAll((prev) => !prev)}
            />
          </div>
        )}
      </div>
      <SubscribeoModal isOpen={isSubscribe} onClose={setIsSubscribe} />
      <ViewDetailModal isOpen={detailOpen} onClose={setDetailOpen} />
    </main>
  );
};

export default RecruitmentDirectoryPage;
