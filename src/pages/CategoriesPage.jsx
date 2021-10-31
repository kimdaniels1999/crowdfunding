import React from "react";
import "../App.css";
import {
  domesticbliss,
  healthyforever,
  money,
  relationships,
  tech,
  wealth,
} from "./images/index";

const CategoriesPage = () => {
  return (
    <div
      style={{
        display: "block",
      }}
    >
      <h1>Choose a Fundraising Category</h1>
      <div>
        <h2>Category</h2>
      </div>
      <div>
        <h3>Domestic Bliss</h3>
        <img
          className="category-images"
          src={domesticbliss}
          alt="hanging potplant"
        />
        <div>
          <h3>Healthiness</h3>
          <img
            className="category-images"
            src={healthyforever}
            alt="plate of fruit"
          />
        </div>
        <div>
          <h3>Money Education</h3>
          <img className="category-images" src={money} alt="moneyfinancials" />
        </div>
        <div>
          <h3>Love & Relationships</h3>
          <img
            className="category-images"
            src={relationships}
            alt="weddingringheart"
          />
        </div>
        <div>
          <h3>Tech & Beyond</h3>
          <img className="category-images" src={tech} alt="glasscube" />
        </div>
        <div>
          <h3>Wealth Building</h3>
          <img className="category-images" src={wealth} alt="bitcoin" />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
