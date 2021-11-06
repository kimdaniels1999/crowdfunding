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
    date_created: new Date(),
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setProjectInfo((prevProject) => {
      return {
        ...prevProject,
        [id]: value,
      };
    });
  };

  const postData = async () => {
    console.log("Im posting a project to your API");
    const token = window.localStorage.getItem("token");
    console.log("What is token:", token);

    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New Project",
        description: "Lets get creative",
        goal: 500,
        image:
          "https://images.pexels.com/photos/9429403/pexels-photo-9429403.jpeg?cs=srgb&dl=pexels-monstera-9429403.jpg&fm=jpg",
        is_open: true,
        date_created: new Date(),
      }),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (window.localStorage.getItem("token")) {
    postData().then((response) => {}); //passing the whole function as an argument to another function
  };

  return (
    <div className="project-box" style={{}}>
      <h1 className="project-label"> Let's start a Project </h1>
      <form className="project-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projectName">Title:</label>
          <input
            type="text"
            id="projectName"
            placeholder="Enter your Project name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="projectDescription">Description:</label>
          <input
            type="text"
            id="projectDescription"
            placeholder="Tell us about your Project"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="projectGoal">Goal:</label>
          <input
            type="text"
            id="projectGoal"
            placeholder="$$$ Goal"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="projectImage">Image:</label>
          <input
            type="text"
            id="projectImage"
            placeholder="Upload Image"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="projectIsOpen">Open for Pledges:</label>
          <input
            type="text"
            id="projectIsOpen"
            placeholder="Yes"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="startButton">
            Submit New Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default StartAProjectForm;
