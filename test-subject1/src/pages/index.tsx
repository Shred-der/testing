import React from 'react';
import type { NextPage } from "next";
import SignIn from "../components/Signin";

const HomePage: NextPage = () => {

  return (
    <div>
        <div>
          <SignIn />
        </div>
    </div>
  );
};

export default HomePage;
