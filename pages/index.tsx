import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import Label from "../components/Label";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import Header from "../components/Header";
import Options from "../components/Options";
import OptionsContainer from "../components/OptionsContainer";
import PaymentDate from "../components/PaymentDate";
import PaymentList from "../components/PaymentList";
import PaymentDetails from "../components/PaymentDetails";
import Bar from "../components/Bar";
import ConfirmButton from "../components/ConfirmButton";
// import TestingComp from "../components/TestingComp";
import AnimatedImg from "../components/expremental/AnimatedImg";

import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <AnimatedImg />
    </div>
  );
};

export default Home;
