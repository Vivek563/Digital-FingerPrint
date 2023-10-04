import React from "react";

function Home() {
  return (
    <>
      <div className="split">
        <div className="left">
          <img src="/Fingerprint-girl.png" alt="" />
        </div>
        <div className="right">
          <h1 className="headingh1">Your Digital Fingerprint</h1>
          <p className="heropara">
            Check your data which may be stolen every time you visit a website.
          </p>
          <ul>
            <li className="li-inline">
              <img className="list-hero-img" src="./Geographical.png" alt="" srcSet=""/>
              <p>Geographical Data</p>
            </li>
            <li className="li-inline">
            <img className="list-hero-img" src="./Device.png" alt="" srcSet=""/>
              <p>Device Data</p>
            </li>
            <li className="li-inline">
            <img className="list-hero-img" src="./location.png" alt="" srcSet=""/>
              <p>Location</p>
            </li>
            <li className="li-inline">
              <img className="list-hero-img" src="./Plugins.png" alt="" srcSet=""/>
              <p>Plugins</p>              
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
