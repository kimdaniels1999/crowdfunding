import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const HomePage = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    console.log("use effect");
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  return (
    <div
      id="project-list"
      style={{
        display: "flex",
        // justifyContent: "Right",
        flexDirection: "columnn",
        // alignItems: "Right",
        height: "50vh",
      }}
    >
      <h1>"Check it out - Projects Galore!"</h1>
      {projectList.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
      })}
    </div>
  );
};

export default HomePage;
