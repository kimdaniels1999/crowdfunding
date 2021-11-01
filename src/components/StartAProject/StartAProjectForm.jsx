import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Project.css";

const StartAProjectForm = () => {
  const history = useHistory();
  const [projectInfo, setProjectInfo] = useState({
    projectTitle: "",
    projectDescription: "",
    projectGoal: "",
    projectImage: "",
    projectisOpen: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setProjectInfo((prevProject) => ({
      ...prevProject,
      [id]: value,
    }));
  };

  const postData = async () => {
    // console.log("Im posting a project to your API");
    const token = window.localStorage.getItem("token");
    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(projectInfo),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("token")) {
      postData().then((response) => {}); //passing the whole function as an argument to another function
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="projectName">Project Title:</label>
        <input
          type="text"
          id="projectName"
          placeholder="Enter project name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="projectDescription">Project Description:</label>
        <input
          type="text"
          id="projectDescription"
          placeholder="Description"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="projectGoal">Project Goal:</label>
        <input
          type="text"
          id="projectGoal"
          placeholder="Goal"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="projectImage">Project Image:</label>
        <input
          type="text"
          id="projectImage"
          placeholder="Image"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="projectIsOpen">Project Is Open:</label>
        <input
          type="text"
          id="projectIsOpen"
          placeholder="IsOpen"
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Submit New Project</button>
      </div>
    </form>
  );
};

export default StartAProjectForm;
