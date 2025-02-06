import React from "react";
import User from "../../assets/components/Messenger/User";
import OppsiteUser from "../../assets/components/Messenger/OppsiteUser";

const Messenger = () => {
  return (
    <div className="bg-slate-800  h-full flex ">
      {/* Sidebar */}
      <div className="w-[200px] bg-slate-900 flex flex-col items-center py-10 fixed h-full">
        <div className="p-5 w-1/3 bg-slate-950 rounded-full text-white text-center">
          <p>User</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="w-full ml-[200px] bg-gray-700 flex flex-col">
        {/* Messages */}
        <div className="p-5 text-white gap-5 flex flex-col overflow-y-auto flex-grow ">
          <div className="flex justify-start">
            <User />
          </div>
          <div className="flex justify-end">
            <OppsiteUser />
          </div>
        </div>

        {/* Message Input (Fixed Inside Container) */}
        <div className="p-4 bg-gray-800 flex w-full sticky bottom-0">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-2 rounded-lg bg-gray-900 text-white focus:outline-none"
          />
          <button className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
