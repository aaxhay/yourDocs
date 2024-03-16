import React from "react";
import { FaFile } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
const Card = ({ data , reference }) => {
  return (
<motion.div drag dragConstraints={reference} whileDrag={{scale : 1.2}} className="relative h-72 w-60 bg-zinc-900/90 rounded-[45px] px-8 py-10 text-white overflow-hidden">
      <FaFile color="white" />
      <p className="text-sm leading-tight mt-5 font-semibold capitalize">{data.desc}</p>
      <div className="footer absolute w-full bottom-0 left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
        <span className="h-7 w-7 flex rounded-full justify-center items-center bg-zinc-500">
          {data.close ? (
            <GoDownload color="white" size=".8em" />
          ) : (
            <IoClose color="white" size=".8em" />
          )}
        </span>
      </div>
      {data.tagDetails.isOpen ? (
        <div className="tag w-full py-4 bg-green-500 flex justify-center items-center">
          <h3 className="text-sm font-semibold">Download Now</h3>
        </div>
      ) : (
        <div className="tag w-full py-4 bg-blue-500 flex justify-center items-center">
          <h3 className="text-sm font-semibold">Close</h3>
        </div>
      )}
    </div>
    </motion.div>
  );
};

export default Card;
