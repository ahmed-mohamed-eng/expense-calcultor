import Image from "next/image";
import background from "../../public/Images/home_page_hero_img.svg";
import Phone from "../../public/Images/Phone.svg";
import PhoneIconComp from "./PhoneIcon";
import Laptop from "../../public/Images/Laptop.svg";
import LaptopIconComp from "./LaptopIcon";
import Calculator from "../../public/Images/Calculator.svg";
import Envlope from "../../public/Images/Envlope.svg";
import Glass from "../../public/Images/Glass.svg";
import VideoIcon from "../../public/Images/Video.svg";
import KioskIcon from "../../public/Images/Kiosk.svg";
import MicrophoneIcon from "../../public/Images/Microphone.svg";

import { motion } from "framer-motion";

import { useSpring, animated } from "react-spring";

export default function AnimatedImg() {
  const { bottom } = useSpring({
    from: {
      bottom: 300,
    },
    to: {
      bottom: 400,
    },
    reset: true,
    // delay: 300,
    loop: { reverse: true },
    config: { mass: 100, tension: 170, friction: 40 },
  });

  return (
    <div className="w-108 h-108 relative">
      {/* <div className="absolute bottom-60 right-14">
        <Image src={Envlope} alt="main image" />
      </div>
      <div className="absolute bottom-10 left-48">
        <Image src={Calculator} alt="main image" />
      </div>
      <div className="absolute bottom-7 left-72">
        <Image src={Glass} alt="main image" />
      </div>
      <div className="absolute bottom-16 left-56">
        <Image src={VideoIcon} alt="main image" />
      </div> */}

      <animated.div  className="absolute bottom-56 left-44">
        <PhoneIconComp />
      </animated.div>

      <animated.div
        // initial={false}
        // animate={{ bottom: ["7rem", "9rem", "7rem"] }}
        // transition={{ delay: 1.8, duration: 1.3, repeat: Infinity }}
        className="absolute bottom-28 left-5"
        // style={{ bottom }}
      >
        <LaptopIconComp />
      </animated.div>

      <animated.div
        // initial={false}
        // animate={{ bottom: ["9rem", "12rem", "9rem"] }}
        // transition={{ delay: 1.95, duration: 1.7, repeat: Infinity }}
        // style={{ bottom }}
        className="absolute bottom-36 right-36"
      >
        {/* <Image src={KioskIcon} alt="main image" /> */}
      </animated.div>
      <animated.div
        // initial={false}
        // animate={{ top: ["2.5rem", "1rem", "2.5rem"] }}
        // transition={{
        //   delay: 1.3,
        //   ease: "linear",
        //   duration: 1.7,
        //   repeat: Infinity,
        // }}
        className="absolute top-10 right-40"
      >
        <div className="relative w-56 h-56">
          {/* <Image
            src={MicrophoneIcon}
            layout="responsive"
            className="w-56 h-56"
            alt="main image"
          /> */}
        </div>
      </animated.div>
    </div>
  );
}
