import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden h-full text-white sm:flex flex-col items-center xl:w-[340px] fixed p-2 xl:items-start">
      <div className="flex items-center justify-center w-14 h-14 p-0 xl:ml-24">
        <Image src="/twitter-icon.jpg" width={30} height={30} />
      </div>
    </div>
  );
};

export default Sidebar;
