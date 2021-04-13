import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CompleteUserInformation from "./components/complete-info.component.js";

function App() {
  return (
    <Router>
      <div className="container">
      {/* <Navbar />
      <br/> */}
      <Route path="/complete-user-information" exact component={CompleteUserInformation} />
      </div>
    </Router>
  );
}

export default App;