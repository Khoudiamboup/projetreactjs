import React from "react";
import imgUser from "../assets/user.png";

export const TopNav = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-5 items-center">
        <img src={imgUser} className="w-30" alt="" />
      </div>
    </div>
  );
};
