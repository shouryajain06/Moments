import React from "react";
import Logo from "../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { authActionTypes } from "../constants/actionTypes";

const SearchBar = () => {
  return (
    <div className="flex items-center relative">
      <AiOutlineSearch className="absolute left-2 text-gray-500" />
      <input
        className="w-[260px] py-2 px-10 bg-[#f6fafd] outline-none focus:shadow-lg transition-all rounded-md"
        placeholder="Search posts"
      />
    </div>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const isLoggedIn = user?.result?.name;
  return (
    <div className="p-4 font-nunito border-b-[1px] flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={Logo} className="w-[40px] h-[40px]" />
        <div className="text-xl font-[700]">
          <span className="text-red-600">Popp</span>
          <span className="text-blue-600">Media</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <SearchBar />
        {isLoggedIn&&<div
          onClick={()=>dispatch({ type: authActionTypes.LOGOUT })}
          className="flex items-center gap-2 px-3 py-2 bg-red-500 rounded-md font-semibold cursor-pointer text-white"
        >
          Logout <BiLogOut />
        </div>}
      </div>
    </div>
  );
};

export default Header;
