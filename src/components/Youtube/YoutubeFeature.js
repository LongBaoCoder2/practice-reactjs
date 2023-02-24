import React from "react";

function YoutubeFeature(youtubeFeatures) {
  return (
    <div className={`${youtubeFeatures.className}`}>
      <div className="youtube-image">
        <img src={youtubeFeatures.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img
          src={youtubeFeatures.authorImg}
          alt=""
          className="youtube-img-author"
        />
        <div className="youtube-sub">
          <h1 className="youtube-title">
            {youtubeFeatures.title || "This is a example"}
          </h1>
          <h1 className="youtube-author">
            {youtubeFeatures.author || "This is a example"}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default YoutubeFeature;
