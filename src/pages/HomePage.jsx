import React, { useState, useEffect } from "react";
// import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const HomePage = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    // console.log("use effect");
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  // const [name, setName] = useState("");

  // const startaProject = async (e) => {
  //   e.preventDefault();
  //   const project = {
  //     title: name,
  //     description: "what is the project",
  //     goal: 100,
  //     image: "https",
  //     is_open: true,
  //     created_at: new Date(),
  //   };

  //   await fetch(`${process.env.REACT_APP_APR_URL}projects/`, {
  //     method: "post",
  //     headers: {
  //       Authorization: `Token ${window.localStorage.getItem("token")}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(project),
  //   });
  // };

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
