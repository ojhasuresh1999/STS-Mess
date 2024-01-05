import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <br />
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter">
              {" "}
              Welcome,
              <br /> <span id="memberName">SURESH OJHA</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
