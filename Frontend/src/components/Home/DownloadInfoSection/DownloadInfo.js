import React from "react";

import "./DownloadInfo.css";

function DownloadInfo() {
  return (
    <section className="info">
      <div className="info-left">
        <img
          src="./images/picku_service.png"
          alt="download"
          className="info-left__img"
        />
      </div>
      <div className="info-right">
        <h2 className="info-right__title">
          Focused on <br className="info-right__break-title" />
          Time Saving
        </h2>
        <p className="info-right__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint
          culpa officiis delectus vitae odit reprehenderit quas. Vero, tempore
          iustgnissimos exercitationem quis aspernatur error facilis
        </p>
        <button className="info-right__btnDownload common-btn">
          Download the mobile app
        </button>
      </div>
    </section>
  );
}

export default DownloadInfo;
