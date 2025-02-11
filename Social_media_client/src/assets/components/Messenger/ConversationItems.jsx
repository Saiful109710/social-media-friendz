import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react"

const ConversationItems = ({ conversation ,setClick}) => {
  return (
    <Link onClick={()=>{setClick(true)}} to={`messenger/${conversation.name}`} >
      <motion.div whileHover={{scale:1.03}} whileTap={{scale:0.98}} className="bg-slate-900 p-2 mt-2 rounded-2xl flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="px-3 py-2 bg-slate-800 rounded-full">
            <p className="uppercase text-2xl font-bold text-gray-400">
              {conversation.name[0]}
            </p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-400">
              {conversation.name}
            </p>
            <p>{conversation.lastMessage}</p>
          </div>
        </div>
        <div>
          <p>{conversation.timeStamps}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ConversationItems;
