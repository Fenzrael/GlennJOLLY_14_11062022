import React from "react";
import FormCreationEmployee from "../components/FormCreationEmployee/FormCreationEmployee";
import Header from "../components/Header/Header";

// Page d'accueil
const Home = () => {
  return (
    <>
      <Header />
      <FormCreationEmployee />
    </>
  );
};

export default Home;
