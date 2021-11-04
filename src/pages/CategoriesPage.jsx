import React, { useState, useEffect } from "react";
import "../App.css";
import badhabits from "./images/badhabits.jpg";
import domesticbliss from "./images/domesticbliss.jpg";
import healthyforever from "./images/healthyforever.jpg";
import money from "./images/money.jpg";
import relationships from "./images/relationships.jpg";
import tech from "./images/tech.jpg";
import wealth from "./images/wealth.jpg";

const CategoriesPage = () => {
  return (
    <div
      id="category-list"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <h1>Choose a Fundraising Category</h1>
      </div>
      <div>
        <h3>Domestic Bliss</h3>
        <img
          className="category-images"
          src={domesticbliss}
          alt="hanging potplant"
        />
      </div>
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
      <div>
        <h3>Toxic Habits</h3>
        <img
          className="category-images"
          src={badhabits}
          alt="blue water pink jellyfish"
        />
      </div>
    </div>
  );
};

export default CategoriesPage;
