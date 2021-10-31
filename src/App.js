import React from "react";
import { BrowserRouter as Router, Switch, Route }from "react-router-dom";
import "./App.css";
import Navbar from './components/Nav/Nav';
import Footer from "./components/Footer/Footer"
import Home from "./pages/HomePage";
import SignInPage from './pages/SignInPage';
import CategoriesPage from './pages/CategoriesPage';
import HowItWorksPage from './pages/HowItWorksPage'
import StartAProjectPage from "./pages/StartAProjectPage";
import ProjectPage from "./pages/ProjectPage";


function App() {
  return (
    <Router>
    <div>
    <Navbar />
    <Switch>
        <Route path='/howitworks' component={HowItWorksPage} />
        <Route path='/categories' component={CategoriesPage} />
        <Route path='/signin' component={SignInPage} />
        <Route path='/startaproject' component={StartAProjectPage} />
        <Route path='/project/:id' component={ProjectPage} />
        <Route path='/' exact component={Home} />
    </Switch>
    <Footer />
    </div>
    </Router>

  );
}

export default App;
