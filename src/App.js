import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Contact } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;