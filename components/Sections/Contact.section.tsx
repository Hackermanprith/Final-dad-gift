import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  FaFacebook,
  FaLinkedin,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/Hackermanprith" />

        <Icon
          icon={<FaFacebook/>}
          url="https://www.facebook.com/anish.mukherjee.54"
        />

        <Icon icon={<MdEmail />} url="mailto:codertest649@gmail.com" />

        <Icon
          icon={<FaLinkedin />}
          url="https://in.linkedin.com/in/anish-mukherjee-7546a679"
        />
      </div>
    </div>
  );
};

export default Contact;
