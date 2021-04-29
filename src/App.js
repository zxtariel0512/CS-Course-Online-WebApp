import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CompleteUserInformation from "./components/complete-info.component.js";
import Register from "./components/register.component.js";
import Login from "./components/login.component.js";
import Profile from "./components/profile.component.js";
import Main from "./components/main.component.js";
import Enroll from "./components/enroll.component.js";
import Course from "./components/course.component.js";
import Reviews from "./components/reviews.component.js";
import { AuthContext } from './context/auth-context';
import axios from 'axios';

let logoutTimer

const App = (props) => {

  const [token, setToken] = useState(false);
  const [username, setUsername] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const login = useCallback((username, token, expirationDate) => {
    setToken(token);
    setUsername(username);
    // setIsloading(false)
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        username: username,
        token: token,
        expiration: tokenExpirationDate.toISOString()
      })
    );
    localStorage.setItem(
      'token',
      token
    );
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUsername(null);
    localStorage.removeItem('userData');
    localStorage.removeItem('profileData');
    let token = null
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    // setIsloading(false)
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration));
      // login(storedData.username, storedData.token);
    }
  }, [login]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        username: username,
        login: login,
        logout: logout
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
          <Route path="/main-courses" exact component={Main} />
          <Route path="/profile" exact component={Profile} />
          <Route path='/' exact component={Login} />
          <Route path="/enroll/:slug" exact component={Enroll} />
          <Route path="/main-courses/:slug" exact component={Course} />
          <Route path="/main-courses/:slug/reviews" exact component={Reviews} />
          </div>
        </Router>
          
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
