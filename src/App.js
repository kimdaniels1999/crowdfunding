import React from "react";
import { BrowserRouter as Router, Switch, Route }from "react-router-dom";
import "./App.css";
import Navbar from './components/Nav/Nav';
// import HomePage from "./pages/HomePage";
import Home from "./pages/HomePage";
// import ProjectPage from "./pages/ProjectPage";
import SignInPage from './pages/SignInPage';
import CategoriesPage from './pages/CategoriesPage';
import HowItWorksPage from './pages/HowItWorksPage'
import StartAProjectPage from "./pages/StartAProjectPage";



function App() {
  return (
    <Router>
    <div>
    <Navbar />
    <Switch>
        <Route path='/HowItWorks' component={HowItWorksPage} />
        <Route path='/Categories' component={CategoriesPage} />
        <Route path='/SignIn' component={SignInPage} />
        <Route path='/StartAProject' component={StartAProjectPage} />
        <Route path='/' exact component={Home} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
