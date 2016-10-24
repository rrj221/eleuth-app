import React, {Component} from 'react';

import "./register.css";

export default class RegistrationPage extends Component {

render() {
    return (
<div id='RegistrationPage'>
 <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/momentjs/2.15.1/moment-with-locales.min.js"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    
    <link rel="stylesheet" type="text/css" href="search.css">

    <link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet">
  
    <link rel="stylesheet" href="style.css" type="text/css" >

  </head>

<div class="header navbar2 navbar-inverse navbar-static-top" id = "top2">
                <div class="navbar-header" id='logoName'>
                        <img src="static/images/mocklogo.png" alt="Logo" id='logo' class="navbar-left">
                        <h1 id='tname'>Eleuth </h1>
</div>
<div className="navbar-collapse collapse" id="navList">
    <ul className="nav navbar-nav navbar-right">
      <li>
          <a href="/mainpage" className="scrollto" id="mainlogin">Main</a>
      </li>
    </ul>
  </div>
</div>
      <div className="alert alert-danger">msg</div>
<div className="row">
  <div className="col-md-6 col-md-offset-3 enter_section">
    <div className= "loginBody">
      <div className="wrapper">
        <div className="container">
          <div className="sectionerReg">
            <form method="post" action="/register">
              <h2 className = "text-center"><u>Register</u></h2>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="First Name" name="firstName">
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Last Name" name="lastName">
              </div>
              <div className="form-group">

                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" name="username">

              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="Email" className="form-control" placeholder="Email" name="email">
              </div>
            <div className="form-group">
                <label>User Image</label>
                <input type="userImage" className="form-control" placeholder="add image url" name="image">
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password Between 7 - 20 Characters" name="password">
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm Your Password" name="password2">
              </div>
                <button type="submit" className="btn btn-primary" value="register">Submit</button>
              </div>
            </form>
            <br>
            <button type="button" className="btn btn-default"><a href="/login">Already a member?</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>