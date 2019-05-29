import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BlogContainer from './containers/BlogContainer';
import ArtContainer from './containers/ArtContainer';
import ProjectContainer from './containers/ProjectContainer';
import Contact from './components/Contact';
import About from './components/About';


class App extends Component {
  render() {
    const App = () => (
      <div>
      <BrowserRouter>
      <div>
      <Header />
      <div className="container">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={BlogContainer} />
      <Route path="/art" component={ArtContainer} />
      <Route path="/projects" component={ProjectContainer} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      </Switch>
      </div>
      <Footer />
      </div>
      </BrowserRouter>
      </div>
    )
  return (
    <BrowserRouter>
      <Switch>
      <App />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
