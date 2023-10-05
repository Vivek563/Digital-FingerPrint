import React from "react";

function Home() {
  return (
    <>
      <div className="split">
        <div className="left">
          <img src="/ff.png" alt="" />
        </div>
        <div className="right">
          <h1 className="headingh1">Your Digital Fingerprint</h1>
          <p className="heropara">
            Check your data which may be stolen every time you visit a website.
          </p>
          <ul>
            <li className="li-inline">
              <img className="list-hero-img" src="https://img.icons8.com/isometric/50/experimental-country-isometric--v1.png" alt="" srcSet=""/>
              <p>Geographical Data</p>
            </li>
            <li className="li-inline">
            <img className="list-hero-img" src="https://img.icons8.com/3d-fluency/94/laptop.png" alt="" srcSet=""/>
              <p>Device Data</p>
            </li>
            <li className="li-inline">
            <img className="list-hero-img" src="https://img.icons8.com/3d-fluency/94/map-marker--v1.png" alt="" srcSet=""/>
              <p>Location</p>
            </li>
            <li className="li-inline">
              <img className="list-hero-img" src="https://img.icons8.com/color/48/joomla.png" alt="" srcSet=""/>
              <p>Plugins</p>              
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
