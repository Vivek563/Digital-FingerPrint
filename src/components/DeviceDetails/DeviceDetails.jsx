import React, { useEffect, useState } from "react";
import platform from "platform";


function DeviceDetails() {
  const [browser, setBrowser] = useState("");
  const [version, setversion] = useState("");
  const [layout, setlayout] = useState("");
  const [operatingsystem, setoperatingsystem] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [screenResolution, setScreenResolution] = useState("");

  useEffect(() => {
    try {
      setBrowser(platform.name.toString());
      setversion(platform.version.toString());
      setoperatingsystem(platform.os.toString());
      setlayout(platform.layout.toString());

      const root = document.documentElement;
      const fontSize = getComputedStyle(root).fontSize;
      setFontSize(fontSize);

      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      setScreenResolution(`${screenWidth}x${screenHeight}`);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="split desktop">
        <div className="right">
          <h1 className="deviceheading">Device Details</h1>
          <ul>
            <li className="li-inline">
              <p>
                Browser: <span>{browser}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
                Browser Version: <span>{version}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
                Operating System: <span>{operatingsystem}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
                CPU Arch: <span>{layout}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
                Installed Fonts: <span>{fontSize}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
                Screen Resolution: <span>{screenResolution}</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="left">
          <img src="/desktop.png" alt="" />
        </div>
      </div>
{/* mobile view */}
      <div className="split-mobile">
      <div className="left">
          <img src="/desktop.png" alt="" />
        </div>
        <div className="right">
          <h1 className="deviceheading">Device Details</h1>
          <ul>
            <li className="li-inline">
              <p>
                Browser: <span>{browser}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
                Browser Version: <span>{version}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
                Operating System: <span>{operatingsystem}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
                CPU Arch: <span>{layout}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
                Installed Fonts: <span>{fontSize}</span>
              </p>
            </li>
            <li className="li-inline">
              <p>
                Screen Resolution: <span>{screenResolution}</span>
              </p>
            </li>
          </ul>
        </div>
        
      </div>
    </>
  );
}

export default DeviceDetails;
