import React from "react";
import { useState } from "react";
import FormCreationEmployee from "../components/FormCreationEmployee/FormCreationEmployee";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";

const Home = () => {
  return (
    <>
      <Header />
      <FormCreationEmployee />
    </>
  );
};

export default Home;
