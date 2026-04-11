import React, { useEffect } from "react";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

Modal.setAppElement("#root");

const FactCheckModal = ({ isOpen, onClose, data = {} }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose(false)}
      className="
        bg-white rounded-3xl shadow-xl
        w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%]
        max-h-[95vh] mx-auto outline-none relative overflow-y-auto
      "
      overlayClassName="
        fixed inset-0 bg-black/60 backdrop-blur-sm 
        flex justify-center items-center z-50
      "
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={() => onClose(false)}
        className="
          absolute top-7 left-6 md:left-auto md:right-8 z-50
          bg-yellow-300 hover:bg-yellow-400
          text-black rounded-full p-2 border
          cursor-pointer
        "
      >
        <RxCross2 size={22} />
      </button>

      <div className="overflow-y-auto max-h-[90vh]">
        <div className="flex flex-col md:flex-row h-full min-h-[500px] bg-[#FDF001]">
          {/* LEFT */}
          <div className="w-full md:w-[42%] p-4 flex flex-col justify-between rounded-2xl bg-white">
            <div className="relative">
              <img
                src={data.img}
                alt={data.title}
                className="w-full aspect-4/3 object-cover rounded-2xl"
              />
              <span className="absolute top-3 right-3 bg-[#FDF001] text-[10px] px-2 py-1 rounded text-black">
                Featured
              </span>
            </div>

            <div className="mb-20">
              <div className="flex justify-between items-center mb-4 mt-10 sm:mt-0">
                <div className="flex items-center text-red-500 text-lg uppercase tracking-wider">
                  <AiOutlineInfoCircle className="mr-2" size={20} />
                  Myth
                </div>
                <span className="bg-blue-900 text-white text-xs px-3 py-1 rounded-lg">
                  Solar Energy
                </span>
              </div>
              <p className="text-gray-800 text-lg">
                {data.highlight}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-[58%] p-8 flex flex-col relative">
            <div className="mb-6">
              <span className="inline-flex items-center bg-[#0000AA] text-white text-sm px-2 py-1 rounded-md">
                <BsCheck className="mr-1" size={20} /> Fact
              </span>
            </div>

            <div className="grow overflow-y-auto pr-4">
              <p className="text-gray-900 text-xl leading-[1.6] font-medium mb-8">
                {data.fact}
              </p>
            </div>

            <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-400 text-sm mb-1">Verified Source:</p>
              <a
                href={data.source}
                target="_blank"
                rel="noreferrer"
                className="text-[#0000AA] font-semibold text-xl flex items-center hover:underline"
              >
                {data.source}
                <FiExternalLink className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FactCheckModal;
