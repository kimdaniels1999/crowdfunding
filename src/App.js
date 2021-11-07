import React from "react";
import { BrowserRouter as Router, Switch, Route }from "react-router-dom";
import "./App.css";

import Nav from './components/Nav/Nav';
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer"

import Home from "./pages/HomePage";
import SignInPage from './pages/SignInPage';
import CategoriesPage from './pages/CategoriesPage';
import HowItWorksPage from './pages/HowItWorksPage'
import StartAProjectPage from "./pages/StartAProjectPage";
import ProjectPage from "./pages/ProjectPage";


const App = () => {
  return (
    <div>
    <Router>
      <Header />
      <hr />
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
          </Route>
        <Route exact path="/signin">
          <SignInPage />
          </Route>
        <Route path='/howitworks'>
          <HowItWorksPage />
          </Route>
        <Route path='/categories'>
          <CategoriesPage />
          </Route>
        <Route path='/startaproject'>
        <StartAProjectPage />
        </Route>
        <Route path='/project/:id'>
        <ProjectPage />
        </Route>
      </Switch>
    </Router>
    <Footer />
    </div>
    )
}

export default App;
