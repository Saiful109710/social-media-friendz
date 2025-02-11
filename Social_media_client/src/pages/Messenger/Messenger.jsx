import { useState } from "react";
import ConversationItems from "../../assets/components/Messenger/ConversationItems";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import { Outlet } from "react-router";

const Messenger = () => {
  const [click,setClick] = useState(false)
  const [conversations, setConversation] = useState([
    { name: "test#1", lastMessage: "Hello", timeStamps: "today" },
    { name: "test#2", lastMessage: "Hello", timeStamps: "today" },
    { name: "test#3", lastMessage: "Hello", timeStamps: "today" },
    { name: "test#4", lastMessage: "Hello", timeStamps: "today" },
    { name: "test#5", lastMessage: "Hello", timeStamps: "today" },
  ]);

  return (
    <div className="bg-slate-800  md:flex ">
      {/* Sidebar */}
      <div className={`w-full md:w-[250px] bg-slate-900 flex flex-col items-center py-2 fixed h-full px-2 ${click?"hidden":"block"} md:block` }>
        {/* Header */}
        <div className="px-2 py-6 bg-slate-950 w-full rounded-xl text-white flex gap-2">
          <IconButton><AccountCircleIcon color="primary" /></IconButton>
          <div>
            <IconButton><PersonAddAltIcon color="primary" /></IconButton>
            <IconButton><GroupAddIcon color="primary" /></IconButton>
            <IconButton><AddCircleIcon color="primary" /></IconButton>
            <IconButton><DarkModeIcon color="primary" /></IconButton>
          </div>
        </div>

        {/* Search */}
        <div className="w-full p-1 rounded-xl bg-slate-950 flex items-center mt-2">
          <IconButton><SearchIcon color="primary" /></IconButton>
          <input type="text" placeholder="Search Conversation"
            className="w-full rounded-lg bg-slate-950 text-white focus:outline-none border-none" />
        </div>

        {/* Conversations */}
        <div className="p-2 space-y-2 grow overflow-y-auto bg-slate-950 w-full mt-2 rounded-xl text-white">
          {conversations.map((conversation, index) => (
            <ConversationItems key={index} conversation={conversation} setClick={setClick}/>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="w-full md:ml-[250px] bg-slate-800 flex flex-col h-[91vh] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Messenger;
