import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen" id="lol">
      <div>
        <p className="text-3xl font-bold text-white">Anish Mukherjee</p>
        <p className="mt-1 text-lg text-gray-300">
         Software Developer,Tech enthusiast and a passionate learner.
        </p>

        <p className="mt-4 text-gray-400">
          I do software development and sometimes cook <br /> 
        </p>

        <Link href="#" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_parent"
            rel="noopener noreferrer"
          >
            Learn more about me
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>

      </div>

      <div className="hidden custom:block">
        <a href="https://drive.google.com/uc?export=view&id=1vKFsZ0FPB8izQwJV0T8F7MbM1OVbWfL9"> <Image src="https://drive.google.com/uc?export=view&id=1vKFsZ0FPB8izQwJV0T8F7MbM1OVbWfL9" width="300" height="300" className="rounded-full" alt="avatar"/> </a>
      </div>
    </div>
  );
};

export default About;
