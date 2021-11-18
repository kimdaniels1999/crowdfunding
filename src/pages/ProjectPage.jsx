import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const ProjectPage = () => {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { isEditing, setIsEditing } = useState(false);
  const { id, project_id } = useParams();
  console.log("my id", id);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, [project_id]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log("We are updating the ", id, "to be: ", value);
    setProjectData({
      ...projectData,
      [id]: value,
    });
  };

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `
    ${process.env.REACT_APP_API_URL}projects/${id}/`,
      {
        method: "put",
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: projectData.id,
          title: projectData.title,
          description: projectData.description,
          goal: projectData.goal,
          image: projectData.image,
          is_open: projectData.is_open,
          date_created: projectData.date_created,
          owner: projectData.owner,
        }),
      }
    );
  };

  const ReadProject = () => {
    return (
      <div className="read">
        <div className="read-project">
          <h2>Title: {projectData.title}</h2>
          <h2>Description: {projectData.description}</h2>
          <img className="read-image" src={projectData.image} />
          <h2>Goal: {projectData.goal}</h2>
          <h2>
            Created at: {new Date(projectData.date_created).toDateString()}
          </h2>
          <h2>{`Is Open to pledges: ${projectData.is_open}`}</h2>
          <h2>Pledges:</h2>
          <ul>
            {projectData.pledges.map((pledgeData, key) => {
              return (
                <li key={key}>
                  {pledgeData.amount} from {pledgeData.supporter}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  const deleteProject = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}projects/${id}/`, {
      method: "delete",
      headers: {
        Authorisation: `Token ${localStorage.getItem("token")}`,
      },
    });
    history.push("/");
  };

  return (
    <div>
      {localStorage.getItem("token") && isEditing === false && (
        <button onClick={() => setIsEditing(true)}> Edit Project </button>
      )}
      <div className="delete-project">
        {localStorage.getItem("token") && (
          <button onClick={deleteProject}> Delete Project </button>
        )}
        <div>
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title">Title</label>
                <input
                  value={projectData.title}
                  type="text"
                  id="title"
                  placeholder=""
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <input
                  value={projectData.description}
                  type="text"
                  id="description"
                  placeholder=""
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="goal">Goal</label>
                <input
                  value={projectData.value}
                  type="text"
                  id="amount"
                  placeholder=""
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="image">Image</label>
                <input
                  value={projectData.image}
                  type="text"
                  id="image"
                  placeholder=""
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="is_open">Open</label>
                <input
                  value={projectData.is_open}
                  type="text"
                  id="is_open"
                  placeholder=""
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
          ) : (
            <ReadProject />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
