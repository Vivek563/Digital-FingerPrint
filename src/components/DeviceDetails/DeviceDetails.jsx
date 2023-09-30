import React from "react";

function DeviceDetails() {
  return (
    <>
      <section className="DeviceHeroSection">
        <div className="device-text">
          <h1 style={{ color: "#7b95f2" }} className="headingh1">
            Device Details
          </h1>

          <div className="secretidentifier">
            <p>
              Browser: <span>Chrome v 117.0.0.0</span>
            </p>
            <p>
              CPU arch: <span>amd64</span>
            </p>
            <p>
              Browser Engine: <span>Blink</span>
            </p>
            <p>
              Operating System: <span>Windows</span>
            </p>
            <p>
              Installed Fonts: <span>95</span>
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
