import React from 'react';
import type { NextPage } from "next";
import SignIn from "../components/Signin";
import Header from '@/components/Header';
import Footer from "../components/Footer";
import Subsection from "../components/Subsection";

const HomePage: NextPage = () => {

  return (
    <div>
        <div>
          <Header />
          <SignIn />
          <Subsection />
          <Footer />
        </div>
    </div>
  );
};

export default HomePage;
