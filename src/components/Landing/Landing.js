import React from "react";
import "./Landing.css";
import tv from './tv.png';
import offline from './offline.jpg';
import watch from './watch.png'

function Landing() {
  return (

    <React.Fragment>

      <div className="row im1 mx-0">
        <h1 className="big-heading">Unlimited movies, TV shows and more.</h1>
      </div>
      <div className="row break my-5 mx-0"></div>
      <div className="row ml-0 mx-0">
        <div className="col-lg-6 col-md-12 feature-box">
          <h3 className="feature-title">Enjoy on your TV.</h3>
          <p className="feature-description">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>

        </div>

        <img className="col-lg-6 feature-image" alt="tv" src={tv} />

      </div>
      <div className="row break my-5 mx-0"></div>
      <div className="row mx-0">
        <div className="col-lg-6 col-md-12">
          <h3 className="feature-title">Download your shows to watch offline.</h3>
          <p className="feature-description">Save your favourites easily and always have something to watch.</p>

        </div>
        <img className="col-lg-6 feature-image" alt="offline" src={offline} />
      </div>
      <div className="row break my-5 mx-0"></div>
      <div className="row mx-0">
        <div className="col-lg-6 col-md-12 feature-box">
          <h3 className="feature-title">Watch everywhere.
                </h3>
          <p className="feature-description">Stream and Enjoy unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </p>

        </div>
        <img className="col-lg-6 feature-image" alt="watch" src={watch} />
      </div>
      <div className="text-center h5" style={{ color: "red", paddingBottom: "10px" }}>© Copyright 2021 Apex Movies</div>
    </React.Fragment>
  );
}
export default Landing;