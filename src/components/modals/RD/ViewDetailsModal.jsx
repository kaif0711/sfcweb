import React from "react";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { MdCall } from "react-icons/md";
import Button from "../../ui/Button";
import headerImg from "../../../assets/images/RDcard.jpg"; // static image

Modal.setAppElement("#root");

const ViewDetailModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose(false)}
      className="
        bg-white rounded-[24px] shadow-xl
        w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%]
        max-h-[95vh] mx-auto outline-none relative overflow-hidden
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
          absolute top-7 right-8 z-50
          bg-yellow-300 hover:bg-yellow-400
          text-black rounded-full p-2 border
          cursor-pointer
        "
      >
        <RxCross2 />
      </button>

      <div className="overflow-y-auto max-h-[95vh]">
        {/* IMAGE HEADER */}
        <img
          src={headerImg}
          alt="Company"
          className="w-full h-40 sm:h-48 md:h-75 object-cover rounded-4xl p-4"
        />

        {/* CONTENT */}
        <div className="p-5 sm:p-6 md:p-8 text-black ">
          {/* TITLE */}
          <h2 className="text-xl sm:text-2xl font-semibold">Lorem ipsum</h2>

          {/* LOCATION + CONTACT */}
          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-700">
            <p className="flex items-center gap-1 text-blue-800">
              <IoLocationSharp />
              Sydney, Australia
            </p>
            <p className="flex items-center gap-1">
              <IoMdMailUnread />
              contact@sfc-events.com
            </p>
            <p className="flex items-center gap-1">
              <MdCall />
              +61 2 9876 5432
            </p>
          </div>

          {/* TAGS */}
          <div className="flex gap-2 flex-wrap mt-4">
            <span className="text-xs bg-blue-800 px-3 py-1 rounded-full text-white">
              Solar
            </span>
            <span className="text-xs bg-blue-800 px-3 py-1 rounded-full text-white">
              Engineering
            </span>
            <span className="text-xs bg-blue-800 px-3 py-1 rounded-full text-white">
              Energy
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-700 mt-4 leading-relaxed">
            Leading solar energy recruitment specialists across Australia and Asia-Pacific. We connect ng solar energy recruitment specialists across Australia and Asia-Pacific. We connectng solar energy recruitment specialists across Australia and Asia-Pacific. We connect We connect ng solar energy recruitment specialists across Australia and Asia-Pacific. We connectng solar energy recruitment specialists across Australia and Asia-Pacific. We connect
          </p>

          {/* BULLET POINTS */}
          <ul className="list-disc pl-5 mt-4 text-sm text-gray-700 space-y-1">
            <li>Lacus massa aliquam ut diam quam</li>
            <li>Lacus massa aliquam ut diam quam</li>
            <li>Lacus massa aliquam ut diam quam</li>
          </ul>

          {/* CTA */}
          <div className="flex justify-end mt-6">
            <Button
              text="VISIT WEBSITE"
              radius="rounded-tl-xl rounded-br-xl"
              width="auto"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewDetailModal;
