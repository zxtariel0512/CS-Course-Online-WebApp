import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CompleteUserInformation from "./components/complete-info.component.js";
import Register from "./components/register.component.js";
import Login from "./components/login.component.js";
import Profile from "./components/profile.component.js";

function App() {
  return (
    <Router>
      <div className="container">
      {/* <Navbar />
      <br/> */}
      <Route path="/complete-user-information" exact component={CompleteUserInformation} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/profile" exact component={Profile} />
      </div>
    </Router>
  );
}

export default App;