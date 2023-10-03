import React from "react";

function Home() {
  return (
    <>
      <section className="herosection">
        <div className="hero-img">
          <img src="/Fingerprint-girl.png" alt="" />
        </div>
        <div className="hero-text">
          <h1 className="headingh1">Your Digital Fingerprint</h1>
          <p className="heropara">
            Check your data which may be stolen every <br /> time you visit a
            website.
          </p>
          <ul className="hero-ul">
            <li>
              <img
                className="list-hero-img"
                src="./Geographical.png"
                alt=""
                srcSet=""
              />
              Geographical Data
            </li>
            <li>
              <img className="list-hero-img" src="./Device.png" alt="" />
              Device Data
            </li>
            <li>
              <img className="list-hero-img" src="./location.png" alt="" />
              Location
            </li>
            <li>
              <img className="list-hero-img" src="./Plugins.png" alt="" />
              Plugins
            </li>
          </ul>
          
          <p className="secretidentifier">Your secret identifier: <span>72069342</span></p>
        </div>
      </section>
    </>
  );
}

export default Home;
