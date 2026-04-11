import React, { useEffect } from "react";
import { IoMdMail } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Modal from "react-modal";
import Button from "../../ui/Button";

Modal.setAppElement("#root");

const SubscribeoModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose(false)}
      className="
        bg-white
        p-6 sm:p-8
        rounded-br-4xl rounded-tl-4xl
        shadow-xl
        w-[95%] sm:w-[90%] lg:w-[80%] xl:w-[70%]
        max-h-[80vh]
        mx-auto
        outline-none
        relative
        overflow-y-auto
      "
      overlayClassName="
        fixed inset-0 bg-black/50 backdrop-blur-sm 
        flex justify-center items-center z-50
      "
    >
      {/* CLOSE BUTTON – FIXED PROPERLY */}
      <button
        onClick={() => onClose(false)}
        className="
          absolute
          top-4 sm:top-6
          right-4 sm:right-6
          text-lg sm:text-xl
          cursor-pointer
          bg-yellow-300
          text-black
          rounded-full
          p-2
          hover:bg-yellow-400
          transition
          border
        "
      >
        <RxCross2 />
      </button>

      {/* MAIN CONTENT */}
      <div className="relative overflow-hidden w-full mt-6">
        {/* TITLE */}
        <h1 className="
          flex items-center justify-center
          text-xl sm:text-2xl md:text-3xl lg:text-4xl
          font-bold
          text-center
        ">
          Lorem ipsum dolor sit amet
        </h1>

        {/* Email Section */}
        <div className="mt-8 sm:mt-10 mb-10 max-w-4xl mx-auto">
          {/* Label */}
          <label className="flex items-center gap-2 text-black font-medium text-sm sm:text-base">
            <span className="text-yellow-300 text-lg sm:text-xl">
              <IoMdMail />
            </span>
            Email Address
          </label>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-3">
            <input
              type="email"
              placeholder="Email"
              className="
                w-full
                px-4
                py-3
                rounded-xl
                border border-black
                text-black
                placeholder-gray-500
                outline-none
              "
            />

            <Button
              text="Subscribe"
              extraClasses="w-full sm:w-auto"
              radius="rounded-tl-xl rounded-br-xl"
              bgColor="bg-blue-800"
              textColor="text-white"
              border="border hover:border-blue-500"
              textColorHover="hover:text-blue-500"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2 mt-4 text-black">
            <input type="checkbox" className="w-4 h-4 mt-1" />
            <p className="text-xs sm:text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          {/* Note */}
          <p className="mt-4 text-xs sm:text-sm leading-relaxed">
            <span className="text-blue-700 font-semibold">Note:</span>{" "}
            Lorem ipsum dolor sit amet consectetur. Pellentesque integer in nunc
            non neque. Lacus massa aliquam ut diam quam.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default SubscribeoModal;
