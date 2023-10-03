import React, { useEffect, useState } from "react";
import platform from "platform";

function DeviceDetails() {
  const [browser, setBrowser] = useState("");
  const [version, setversion] = useState("");
  const [operatingsystem, setoperatingsystem] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [screenResolution, setScreenResolution] = useState("");

  useEffect(() => {
    try {
      setBrowser(platform.name.toString());
      setversion(platform.version.toString());
      setoperatingsystem(platform.os.toString());

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
      <section className="DeviceHeroSection">
        <div className="device-text">
          <h1 style={{ color: "#7b95f2" }} className="headingh1">
            Device Details
          </h1>

          <div className="secretidentifier">
            <p>
              Browser: <span>{browser}</span>
            </p>
            <p>
              Browser Version: <span>{version}</span>
            </p>
            <p>
              Operating System: <span>{operatingsystem}</span>
            </p>
            <p>
              Installed Fonts: <span>{fontSize}</span>
            </p>
            <p>
              Screen Resolution: <span>{screenResolution}</span>
            </p>
          </div>
        </div>
        <div className="device-img">
          <img src="/desktop.png" alt="" />
        </div>
      </section>
    </>
  );
}

export default DeviceDetails;
