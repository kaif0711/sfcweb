import React from "react";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdCall } from "react-icons/md";
import Button from "../../ui/Button";
import { FaCalendarAlt, FaStar } from "react-icons/fa";

Modal.setAppElement("#root");

const PodcastProfileModal = ({ isOpen, onClose, video }) => {
  if (!video) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose(false)}
      className="
        bg-white p-5 rounded-[32px] shadow-2xl
        w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%]
        max-h-[95vh] mx-auto outline-none relative
      "
      overlayClassName="
        fixed inset-0 bg-black/60 backdrop-blur-sm
        flex justify-center items-center z-50
      "
    >
      {/* CLOSE */}
      <button
        onClick={() => onClose(false)}
        className="absolute top-6 right-6 z-50 bg-yellow-400 w-9 h-9 rounded-full flex items-center justify-center hover:bg-yellow-500 cursor-pointer"
      >
        <RxCross2 className="text-black text-lg" />
      </button>

      <div className="overflow-y-auto max-h-[90vh]">
        {/* ================= HERO IMAGE ================= */}
        <div className="relative w-full h-[260px] sm:h-[320px] rounded-t-[20px] overflow-hidden">
          <img
            src={video.coverImg || video.img}
            alt={video.title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="pt-6 sm:p-5">
          {/* PROFILE HEADER */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* AVATAR */}
            <img
              src={video.avatar || video.img}
              alt={video.title}
              className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400"
            />

            {/* NAME */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {video.title}
              </h2>
              <p className="text-gray-500 text-sm">
                {video.profession || "Podcast Host & Content Creator"}
              </p>

              {/* TAGS */}
              <div className="flex gap-2 mt-2 flex-wrap">
                {(video.tags || ["Podcast", "Podcast", "Podcast"]).map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-700 text-white text-xs px-3 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* ================= DETAILS GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* ABOUT */}
            <div>
              <h3 className="font-semibold text-lg mb-2">About us</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {video.about ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Passionate about bringing insights and stories to listeners around the world."}
              </p>
            </div>

            {/* DETAILS */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Details</h3>

              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2 items-center">
                  <FaStar /> <span>Podcast:</span>{" "}
                  <strong>{video.podcast || "Tech Talks Daily"}</strong>
                </li>

                <li className="flex gap-2 items-center">
                  <IoLocationSharp /><span>Location:</span>
                  <span>{video.location || "San Francisco, CA"}</span>
                </li>

                <li className="flex gap-2 items-center">
                  <FaCalendarAlt /> <span>Joined:</span>{" "}
                  <strong>{video.joined || "January 2020"}</strong>
                </li>

                <li className="flex gap-2 items-center">
                  <MdEmail /><span>Email:</span>
                  <span>{video.email || "hello@podcast.com"}</span>
                </li>

                <li className="flex gap-2 items-center">
                  <MdCall /><span>Contact:</span>
                  <span>{video.contact || "+23 1234 589 2587"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PodcastProfileModal;
