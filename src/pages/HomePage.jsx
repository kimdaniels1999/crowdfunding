import React, { useState, useEffect } from "react";
// import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const HomePage = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  const token = window.localStorage.getItem("token");

  return (
    <div>
      {token ? (
        <div className="login">
          <h2> Welcome You're Logged in</h2>
        </div>
      ) : null}
      <div id="project-list">
        {projectList.map((projectData, key) => {
          return (
            <div key={key}>
              <ProjectCard projectData={projectData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
