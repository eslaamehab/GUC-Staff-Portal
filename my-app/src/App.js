//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import loginInfo from "./components/loginInfo.component";
import regInfo from "./components/regInfo.component";
import profile from "./components/profile.component";
import attendanceInfo from "./components/attendanceInfo.component";
import updatePassword from "./components/updatePassword.component";
import logout from "./components/logout.component";
import navbar from "./components/navbar.component";
import signin from "./components/signin.component";
import signout from "./components/signout.component";
import manualsigninout from "./components/manualsigninout.component";



function App() {
  return (
    <Router>
      <br/>
      <Route path = "/login" exact component = {loginInfo}/>
      <Route path = "/register" exact component = {regInfo}/>
      <Route path = "/profile" exact component = {profile}/>
      <Route path = "/attendance" exact component = {attendanceInfo}/>
      <Route path = "/updatePassword" exact component = {updatePassword}/>
      <Route path = "/logout" exact component = {logout}/>
      <Route path = "/navbar" exact component = {navbar}/>
      <Route path = "/signin" exact component = {signin}/>
      <Route path = "/signout" exact component = {signout}/>
      <Route path = "/manualsigninout" exact component = {manualsigninout}/>
      
      
    </Router>
  );
}

export default App;
