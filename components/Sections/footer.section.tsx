import type { NextPage } from "next";

import Image from "next/image";
import { useRouter } from "next/router";

  const Footer: NextPage = () => {
  const router = useRouter();

  return (
    <>
        <div className=" font-bold text-white justify-center">I have made this website with Next.js, TailwindCSS, and TypeScript for my dad's birthday,Happy birthday dad</div>
    </>
  );
};

export default Footer;
