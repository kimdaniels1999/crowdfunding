import React from "react";
import { BrowserRouter as Router, Switch, Route }from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import Home from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from './pages/LoginPage';
import Contact from './pages/ContactPage';
import About from './pages/AboutPage'
import CreateProjectForm from "./components/CreateProjectForm/CreateProjectForm";


function App() {
  return (
    <Router>
    <div>
    <Nav />
    <Switch>
        <Route exact path="/project/:id">
        <ProjectPage />
        </Route>
        <Route exact path="/about/">
        <ProjectPage />
        </Route>
        <Route exact path="/contact/">
        <ProjectPage />
        </Route>
        <Route exact path="/login">
        <LoginPage />
        </Route>
        <Route exact path="/CreateProjectForm">
        <CreateProjectForm />
        </Route>
        <Route path="/">
        <HomePage />
        </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
