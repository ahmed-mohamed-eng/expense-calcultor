// import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

export default function TestingComp() {
  const props = useSpring({
    to: {
      top: "450px",
    },
    from: {
      top: "0px",
    },
    loop: true,
    // reverse: true,
  });

  return (
    <animated.div
      style={props}
      className="relative bg-blue-800 rounded-xl h-48 w-48"
    >
      <h1>Hello, World</h1>
    </animated.div>
  );
}
