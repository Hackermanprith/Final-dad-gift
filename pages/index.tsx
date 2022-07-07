import type { NextPage } from "next";

import {
  Header,
  About,
  Detailedaboutme,
  Skills,
  Contact,
  Footer,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About />
      <Detailedaboutme />
      <Skills />
      <Contact />
      

      <div className="flex justify-center text-white-200">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
