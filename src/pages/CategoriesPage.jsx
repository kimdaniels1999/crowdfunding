import React, { useState, useEffect } from "react";
import "../App.css";
import domesticbliss from "./images/domesticbliss.jpg";
import healthyforever from "./images/healthyforever.jpg";
import money from "./images/money.jpg";
import relationships from "./images/relationships.jpg";
import tech from "./images/tech.jpg";
import wealth from "./images/wealth.jpg";
import jobs from "./images/jobs.jpg";
import gardening from "./images/gardening.jpg";
import artsncrafts from "./images/artsncrafts.jpg";

const CategoriesPage = () => {
  return (
    <div className="categories-box">
      <h1 className="category-label">Choose a Fundraising Category</h1>
      <div className="category-list">
        <div className="column">
          <h3>Love & Relationships</h3>
          <img
            className="category-images"
            src={relationships}
            alt="weddingringheart"
          />
        </div>
        <div className="column">
          <h3>Jobs</h3>
          <img
            className="category-images"
            src={jobs}
            alt="blue water pink jellyfish"
          />
        </div>
        <div className="column">
          <h3>Healthiness</h3>
          <img
            className="category-images"
            src={healthyforever}
            alt="plate of fruit"
          />
        </div>
        <div className="column">
          <h3>Domestic Bliss</h3>
          <img
            className="category-images"
            src={domesticbliss}
            alt="hanging potplant"
          />
        </div>
        <div className="column">
          <h3>Gardening</h3>
          <img
            className="category-images"
            src={gardening}
            alt="blue water pink jellyfish"
          />
        </div>
        <div className="column">
          <h3>Arts & Crafts</h3>
          <img
            className="category-images"
            src={artsncrafts}
            alt="blue water pink jellyfish"
          />
        </div>
        <div className="column">
          <h3>Tech & Beyond</h3>
          <img className="category-images" src={tech} alt="glasscube" />
        </div>
        <div className="column">
          <h3>Wealth Building</h3>
          <img className="category-images" src={wealth} alt="bitcoin" />
        </div>
        <div className="column">
          <h3>Money Education</h3>
          <img className="category-images" src={money} alt="moneyfinancials" />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
