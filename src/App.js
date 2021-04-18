import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CompleteUserInformation from "./components/complete-info.component.js";
import Register from "./components/register.component.js";
import Login from "./components/login.component.js";
import Profile from "./components/profile.component.js";
import { AuthContext } from './context/auth-context';
import axios from 'axios';

const App = (props) => {

  const [token, setToken] = useState(false);
  const [username, setUsername] = useState(false);

  const login = useCallback((username, token, expirationDate) => {
    setToken(token);
    setUsername(username);
    // setIsloading(false)
    // const tokenExpirationDate =
    //   expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    // setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        username: username,
        token: token,
        // expiration: tokenExpirationDate.toISOString()
      })
    );
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    // setIsloading(false)
    if (
      storedData &&
      storedData.token // &&
      // new Date(storedData.expiration) > new Date()
    ) {
      // login(storedData.userId, storedData.token, new Date(storedData.expiration));
      login(storedData.username, storedData.token);
    }
  }, [login]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        username: username,
        login: login,
        // logout: logout
      }}
    >
      <div className="container">

        {/* <main> */}
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
          {/* <SocialMedia /> */}
          {/* <Footer /> */}
        {/* </main> */}
        {/* {loading} */}

      </div>
    </AuthContext.Provider>
  );


}

// function App() {
//   return (
    // <Router>
    //   <div className="container">
    //   {/* <Navbar />
    //   <br/> */}
    //   <Route path="/complete-user-information" exact component={CompleteUserInformation} />
    //   <Route path="/register" exact component={Register} />
    //   <Route path="/login" exact component={Login} />
    //   <Route path="/profile" exact component={Profile} />
    //   </div>
    // </Router>
//   );
// }

export default (App);