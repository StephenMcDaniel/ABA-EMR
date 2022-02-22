import React, { useState, useEffect, useContext } from "react";
import "bootstrap";

const App = () => {
  return (
    <>
      <div className="container border rounded mh-100 bg-light">
        <div className="text-center border container rounded my-2">
          <h1>ABA</h1>
        </div>
        <div className="text-center align-middle container border rounded my-2">
          <div>Patient information placeholder!</div>
          <h3>THIS IS A TEST</h3>
        </div>
      </div>
      <div className="container bg-light mt-2 border rounded align-middle mx-auto">
        <figure>
          <blockquote className="blockquote ">
            <p className="text-center align-middle">
              A failure is not always a mistake, it may simply be the best one
              can do under the circumstances. The real mistake is to stop
              trying.
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Burrhus Frederic Skinner{" "}
            <cite title="Beyond Freedom and Dignity">
              Beyond Freedom and Dignity
            </cite>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default App;
