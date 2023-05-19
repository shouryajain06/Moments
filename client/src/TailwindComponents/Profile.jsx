import { Avatar, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import CreateFormDrawer from "./CreateFormDrawer";


export function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}


const Profile = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  const [createOpen,setCreateOpen] = useState(false);

  if (!user?.result?.name) {
    return (
      <div className="min-h-[99vh] border-r-[1px]">
        <div className="pt-5 px-4">
          <div className="text-2xl">Please login to proceed <span onClick={()=>history.push('/auth')} className="underline text-blue-500 cursor-pointer">Login/Signup</span></div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 font-nunito py-3 border-r-[1px] min-h-[99vhe]">
      <CreateFormDrawer isOpen={createOpen} handleClose={()=>setCreateOpen(false)}/>
      <div className="flex justify-end">
 
      </div>
      <div className="mt-16 w-full flex items-center justify-center flex-col">
        <div
          className="w-[150px] text-6xl font-[900] tracking-widest text-white flex items-center justify-center h-[150px] rounded-full bg-gray-600"
          style={{
            backgroundColor : stringToColor(user?.result?.name),
          }}
        >
          {`${user?.result?.name.split(' ')[0][0]}${user?.result?.name.split(' ')[1][0]}`}
        </div>
        <div className="mt-4 text-2xl font-bold">{user?.result?.name}</div>
        <div className="text-xs opacity-60">{user?.result?.email}</div>
        <div className="mt-5 px-8 py-1 rounded-md bg-black text-white font-semibold">
          Edit
        </div>
      </div>
      {/* <div className="mt-12 px-3 flex items-center justify-between">
        <div className="shrink-0 flex items-center justify-center flex-col">
          <div className="font-bold text-lg">98</div>
          <div className="text-sm opacity-60">Posts</div>
        </div>
        <div className="shrink-0 flex items-center justify-center flex-col">
          <div className="font-bold text-lg">2.5k</div>
          <div className="text-sm opacity-60">Likes</div>
        </div>
        <div className="shrink-0 flex items-center justify-center flex-col">
          <div className="font-bold text-lg">38</div>
          <div className="text-sm opacity-60">Following</div>
        </div>
      </div> */}
      <div className="mt-12">
        <div className="font-bold text-lg">{user?.result?.name}</div>
        <div className="mt-2 text-sm opacity-60">
        Lucid thoughts . Ludic dreams . MoonstOne
        </div>
      </div>
      <div onClick={()=>setCreateOpen(true)} className="w-full mt-10 gradient-button font-semibold text-lg rounded-md py-2 text-center">
        Create Post
      </div>
    </div>
  );
};

export default Profile;
