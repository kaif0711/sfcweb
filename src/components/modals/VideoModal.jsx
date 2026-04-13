import React from "react";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import Button from "../ui/Button";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

Modal.setAppElement("#root"); // make sure your app root id is #root

const VideoModal = ({ isOpen, onClose, video }) => {
  if (!video) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose(false)}
      className="
        bg-white p-6 rounded-[40px] shadow-xl
        w-[95%] sm:w-[90%] lg:w-[80%] xl:w-[90%]
        max-h-[95vh] mx-auto outline-none relative
      "
      overlayClassName="
        fixed inset-0 bg-black/50 backdrop-blur-sm 
        flex justify-center items-center z-50
      "
    >
      <button
              onClick={() => onClose(false)}
              className="absolute top-8 right-8 sm:right-11 z-50 bg-yellow-400 w-9 h-9 rounded-full flex items-center justify-center hover:bg-yellow-500 cursor-pointer"
            >
              <RxCross2 className="text-black text-lg" />
            </button>
      {/* MAIN CONTENT */}
      <div className="overflow-y-auto max-h-[90vh] pb-5">
        {/* BIG VIDEO IMAGE */}
        <div className="relative rounded-2xl overflow-hidden w-full h-[330px] sm:h-[820px]">
          <img
            src={video.img}
            alt={video.title}
            className="w-full h-full object-cover"
          />

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <AiFillPlayCircle className="text-yellow-400 hover:text-yellow-500 w-20 h-20 drop-shadow-xl cursor-pointer" />
          </div>

          {/* BOTTOM TIME BADGE */}
          <div className="absolute bottom-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full flex items-center text-sm font-semibold gap-1 shadow">
            <MdOutlineWatchLater /> {video.time || "10:28"}
          </div>

          {/* PROGRESS BAR LOOK (thin yellow line at bottom) */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/40">
            <div className="h-full bg-yellow-400 w-2/3 rounded-tr-full" />
          </div>
        </div>

        {/* left side  */}

        {/* MAIN DETAILS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mt-6">
          {/* LEFT SIDE — 2/3 WIDTH */}
          <div className="lg:col-span-2 space-y-8">
            {/* TITLE + TAG */}
            <div>
              <h2 className="text-2xl font-bold">{video.title}</h2>

              <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
                <span>{video.date || "Nov 20, 2024"}</span>
                <span className="bg-blue-700 text-white px-3 py-1 rounded-lg text-xs">
                  {(video.tags && video.tags[0]) || "Energy Storage"}
                </span>
              </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="border-t border-gray-300 pt-4">
              <h3 className="font-semibold text-gray-900 text-xl mb-2">
                About this Video
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {video.subtitle ||
                  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"}
              </p>
            </div>

            {/* CATEGORY + CITY */}
            <div className="border-gray-300 space-y-4 text-sm">
              {/* CATEGORIES */}
              <div className="flex items-center gap-5">
                <span className="font-semibold text-gray-900">
                  Categories:{" "}
                </span>
                <div className="flex gap-2 flex-wrap">
                  {(video.tags || ["Energy Storage"]).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-700 text-white text-xs px-4 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CITY */}
              <div>
                <span className="font-semibold text-gray-900">City: </span>
                <span className="bg-blue-700 text-white text-xs px-4 py-1 rounded-lg ml-16">
                  {video.city || "USA"}
                </span>
              </div>
            </div>

            {/* SHARE BUTTONS */}
            <div className="border-t border-gray-300 pt-4">
              <h3 className="font-semibold text-gray-900 text-xl mb-3">
                Share this videos
              </h3>

              <div className="flex flex-wrap gap-3">
         
                <Button text="Twitter"  extraClasses="sm:w-auto" radius="rounded-tl-xl rounded-br-xl" icon={<FaTwitter />} iconPosition="left"/>
                <Button text="Facebook" extraClasses="sm:w-auto" radius="rounded-tl-xl rounded-br-xl" icon={<FaFacebook />} iconPosition="left"/>
                <Button text="Instagram" extraClasses="sm:w-auto" radius="rounded-tl-xl rounded-br-xl" icon={<FaInstagram />} iconPosition="left"/>
            
              </div>
            </div>
          </div>

          {/* ---------------- RIGHT SIDE — SUGGESTED VIDEOS ---------------- */}
          <div className="space-y-4">
            <h3 className="text-gray-900 mb-3">Suggest Videos</h3>

            {[1, 2, 3].map((n, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="relative w-38 h-25 rounded-xl overflow-hidden">
                  <img
                    src={video.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />

                  {/* Yellow time badge */}
                  <div className="absolute bottom-1 right-1 bg-yellow-400 text-black text-[10px] px-2 py-[2px] m-2 rounded-full flex items-center gap-1">
                    <MdOutlineWatchLater size={12} /> {video.time || "10:28"}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold">{video.title}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
