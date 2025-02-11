import React from "react";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import User from "./User";
import OppsiteUser from "./OppsiteUser";
import { AnimatePresence, anticipate, easeInOut } from "framer-motion";
import { motion } from "motion/react"

const ChatArea = () => {
  return (
    <AnimatePresence>
      <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0}} transition={{ease:"anticipate",duration:"0.3"}} className="p-2 flex flex-col  h-full">
        {/* chat header */}
        <div className="sticky top-0 z-10 w-full bg-slate-900 p-2 flex justify-between items-center rounded-2xl">
          <div className="flex items-center gap-2">
            <div className="px-3 py-2 bg-slate-800 rounded-full">
              <p className="uppercase text-2xl font-bold text-gray-400">A</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-400">Alex</p>
              <p>Online</p>
            </div>
          </div>
          <IconButton>
            <LinearScaleIcon color="primary" />
          </IconButton>
        </div>

        {/* chat container - This should scroll */}
        <div className="flex-1 overflow-y-auto scrollbar-hide  mt-2 p-2 bg-slate-800 rounded-xl">
          {/* Test with many messages */}
          {[...Array(50)].map((_, i) => (
            <div key={i}>
              <User />
              <OppsiteUser />
            </div>
          ))}
        </div>

        {/* send message */}
        <div className="sticky bottom-0 w-full z-10 bg-slate-900 p-2 rounded-2xl flex gap-2 items-center mt-1">
          <input
            type="text"
            className="p-2 w-full bg-slate-900 text-white rounded-xl border-none focus:outline-none"
            placeholder="Type a message"
          />
          <IconButton>
            <SendIcon color="primary" />
          </IconButton>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatArea;
