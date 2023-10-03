import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GeoData() {

  const [userLocation, setUserLocation] = useState({});

  useEffect(() => {
    
    axios.get(`https://ipinfo.io?token=8c8be48aaba949`)
      .then((response) => {
        setUserLocation(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

 

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
          IP Address: <span>{userLocation.ip}</span>
          </p>
          <p>
          City: <span>{userLocation.city}</span>
          </p>
          <p>
          Region:<span> {userLocation.region}</span>
          </p>
          <p>
          Country: <span>{userLocation.country}</span>
          </p>
          <p>
          ISP: <span>{userLocation.org}</span>
          </p>
          <p>
          Timezone: <span>{userLocation.timezone}</span>
          </p>
          <p>
          Postal: <span>{userLocation.postal}</span>
          </p>
          <p>
          loc: <span>{userLocation.loc}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default GeoData;
