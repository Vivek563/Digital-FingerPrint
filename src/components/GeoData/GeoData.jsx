import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GeoData() {

  const [userLocation, setUserLocation] = useState({});

  useEffect(() => {
    
    axios.get(`http://ip-api.com/json/`)
      .then((response) => {
        setUserLocation(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

 

  return (

    <>
    <div className="split">
    <div className="left">
          <img src="/geo2.png" alt="" />
        </div>
        <div className="right">
          <h1 style={{color:"#85ce3b"}} className="deviceheading">Your Geo Data</h1>
          <ul>
            <li className="li-inline">
              <p>
              IP Address: <span>{userLocation.query}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
              Country: <span>{userLocation.country}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
              City: <span>{userLocation.city}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
              Region:<span> {userLocation.regionName}</span>
              </p>
            </li>
           
            <li className="li-inline">
              <p>
              ISP: <span>{userLocation.org}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
              Timezone: <span>{userLocation.timezone}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
              Latitude: <span> {userLocation.lat}</span>
              </p>
            </li>
             <li className="li-inline">
              <p>
              Longitude:  <span>{userLocation.lon}</span>
              </p>
            </li> 
            <li className="li-inline">
              <p>
              Postal Code: <span>{userLocation.zip}</span>
              </p>
            </li>
            
          
          
          </ul>
        </div>
        
      </div>
    

    
    

    </>
  );
}

export default GeoData;
