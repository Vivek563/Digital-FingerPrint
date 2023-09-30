import React from "react";

function GeoData() {
  return (
    <section className="GeoHeroSection">
      <div className="geo-img">
        <img src="/geo2.png" alt="" />
      </div>
      <div className="geo-text">
        <h1 style={{ color: "#e56840" }} className="Geoheadingh1">
          Your Geo Data
        </h1>

        <div className="geosecretidentifier">
          <p>
          IP Address: <span>49.36.136.25</span>
          </p>
          <p>
          City: <span>New Delhi</span>
          </p>
          <p>
          Region:<span> National Capital Territory of Delhi (DL)</span>
          </p>
          <p>
          Country: <span>India (IN)</span>
          </p>
          <p>
          ISP: <span>Reliance Jio Infocomm Limited</span>
          </p>
          <p>
          Timezone: <span>Asia/Kolkata</span>
          </p>
          <p>
          Org: <span>JIO FTTX SUBSCRIBER</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default GeoData;
