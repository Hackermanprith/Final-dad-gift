import type { NextComponentType } from "next";

import Link from "next/link";

const Detailedaboutme: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">About me</p>
      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">Hey I am Anish Mukherjee from WestBengal,India  ,<br/> I work as fullstack, software developer at Khaitan & co .<br/> I am certified with CCNA,Microsoft AZ-200 etc.I mainly code in C# and do webdev in ASP. NET framework while using many light weight frameworks like .Net mvc etc.<br/>I enjoy taking complex problems and turing them into beautiful code.<br/>My enjoy travelling and cooking a lot.You can get in touch with me using any of the methods below.</p>
    </div>
    </div>

  );
};

export default Detailedaboutme;
