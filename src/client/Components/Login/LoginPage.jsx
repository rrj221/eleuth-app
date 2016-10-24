import React, {Component} from 'react';

import "./login.css";

export default class LoginPage extends Component {

render() {
    return (
<div id='LoginPage'>
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

        <script src="https://cdn.jsdelivr.net/momentjs/2.15.1/moment-with-locales.min.js"></script>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"/>

        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous">


        <link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet"/></script>
  <div className="user-form-container">

  <ul className="nav nav-tabs" id="form-tabs" role="tablist">
    <li role="presentation"><a href="#login" aria-controls="login" role="tab" data-toggle="tab">Login</a></li>
    <li role="presentation"><a href="#register" aria-controls="register" role="tab" data-toggle="tab">Register</a></li>
    <li role="presentation"><a href="#recover_password" aria-controls="recover_password" role="tab" data-toggle="tab">Recover Password</a></li>
  </ul>

  <div className="tab-content">
    <div role="tabpanel" className="tab-pane panel-style clearfix" id="login">
    
      <form>

        <div className="form-group">
        <label>Email address</label>
        <input type="text" className="form-control input-sm" className="email" value="" placeholder="Email address..." />
        </div>
        
        <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control input-sm" name="password" placeholder="Password..." />
        </div>

        <div className="checkbox">
        <label>
          <input type="checkbox" className="remember_me" value="1" /> Remember me
        </label>
        </div>

        <button type="submit" className="submit_button" value="login" class="btn_login">Login</button>
        
      </form>

    </div>

    <div role="tabpanel" className="tab-pane panel-style clearfix" id="register">
    
      <form id="registration-form">

        <div className="form-group">
        <label>Username</label>
        <input type="text" name="username" class="form-control input-sm" placeholder="Username..." />
        </div>

        <div className="form-group">
          <label>Password</label>
          <div class="input-group">
            <input type="password" className="password" class="form-control input-sm" placeholder="Password..." />
            <input type="password" className="rep_password" class="form-control input-sm" placeholder="Repeat password..." />
          </div>
        </div>  
        
        <div className="form-group">
          <label>Name</label>
          <div className="input-group">
            <input type="text" className="first_name" className="form-control input-sm" placeholder="First..." />
            <input type="text" className="last_name" className="form-control input-sm" placeholder="Last..." />
          </div>
        </div>    
                      
        <div className="form-group">
          <label>Email address</label>
          <input type="text" className="email_address" className="form-control input-sm" placeholder="Email address..." />
        </div>    
                      
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" className="phone_number" className="form-control input-sm" placeholder="Phone Number..." />
        </div>    
                      
        
        <button type="button" className="submit_button" value="register" class="btn_register">Register</button>
        
      </form>
      
      

    </div>

    <div role="tabpanel" className="tab-pane panel-style clearfix" id="recover_password">
    
      <form>
      
        <div className="form-group">
        <label>Email address</label>
        <input type="text" className="form-control input-sm" className="rec_email" value="" placeholder="Email address..." />
        </div>
        
        <button type="submit" className="submit_button" value="recover_password" className="btn_recover">Recover Password</button>
        
      </form>
      
      </div>
    </div>
  </div>
</div>
    )
  }
}


