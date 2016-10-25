import React, {Component} from 'react';

import "./registration.css";

// export default class RegistrationPage extends Component {

// constructor(props) {
//   super(props);

//   this.state{

//   }
// }


const RegistrationPage = React.createClass({
  getInitialState: function () {
    return {
      email: null,
      companyName: null,
      password: null,
      confirmPassword: null,
      statesValue: null,
      forbiddenWords: ["password", "user", "username"]
    }
  },

  handlePasswordInput: function (event) {
    if(!_.isEmpty(this.state.confirmPassword)){
      this.refs.passwordConfirm.isValid();
    }
    this.refs.passwordConfirm.hideError();
    this.setState({
      password: event.target.value
    });
  },

  handleConfirmPasswordInput: function (event) {
    this.setState({
      confirmPassword: event.target.value
    });
  },

  saveAndContinue: function (e) {
    e.preventDefault();

    var canProceed = this.validateEmail(this.state.email) 
        && !_.isEmpty(this.state.statesValue)
        && this.refs.password.isValid()
        && this.refs.passwordConfirm.isValid();

    if(canProceed) {
      var data = {
        email: this.state.email,
        state: this.state.statesValue
      }
      alert('Thanks.');
    } else {
      this.refs.email.isValid();
      this.refs.state.isValid();
      this.refs.companyName.isValid();
      this.refs.password.isValid();
      this.refs.passwordConfirm.isValid();
    }
  },

  isConfirmedPassword: function (event) {
    return (event == this.state.password)
  },

  handleCompanyInput: function(event) {
    this.setState({
      companyName: event.target.value
    })
  },

  handleEmailInput: function(event){
    this.setState({
      email: event.target.value
    });
  },

  validateEmail: function (event) {
    // regex  http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  },

  isEmpty: function (value) {
    return !_.isEmpty(value);
  },

  updateStatesValue: function (value) {
    this.setState({
      statesValue: value
    })
  },

  render: function() {
    return (
      <div className="create_account_screen">

        <div className="create_account_form">
          <h1>Create account</h1>
          <p>Register to get started! </p>
          <form onSubmit={this.saveAndContinue}>

            <Input 
              text="Email Address" 
              ref="email"
              type="text"
              defaultValue={this.state.email} 
              validate={this.validateEmail}
              value={this.state.email}
              onChange={this.handleEmailInput} 
              errorMessage="Email is invalid"
              emptyMessage="Email can't be empty"
              errorVisible={this.state.showEmailError}
            />

            <Input 
              text="Company Name" 
              ref="companyName"
              validate={this.isEmpty}
              value={this.state.companyName}
              onChange={this.handleCompanyInput} 
              emptyMessage="Company name can't be empty"
            /> 

            <Input 
              text="Password" 
              type="password"
              ref="password"
              validator="true"
              minCharacters="8"
              requireCapitals="1"
              requireNumbers="1"
              forbiddenWords={this.state.forbiddenWords}
              value={this.state.passsword}
              emptyMessage="Password is invalid"
              onChange={this.handlePasswordInput} 
            /> 

            <Input 
              text="Confirm password" 
              ref="passwordConfirm"
              type="password"
              validate={this.isConfirmedPassword}
              value={this.state.confirmPassword}
              onChange={this.handleConfirmPasswordInput} 
              emptyMessage="Please confirm your password"
              errorMessage="Passwords don't match"
            /> 

            <Select 
              options={STATES} 
              ref="state"
              value={this.state.statesValue} 
              onChange={this.updateStatesValue} 
              searchable={this.props.searchable} 
              emptyMessage="Please select state"
              errorMessage="Please select state"
              placeholder="Choose Your State"
              placeholderTitle="Your State"
            />

            <button 
              type="submit" 
              className="button button_wide">
              CREATE ACCOUNT
            </button>

          </form>

        </div>

      </div>
    );
  }
    
});
    
module.exports = RegistrationPage;
//export default RegistrationPage;




// render() {
//     return (
// <div className='Register'>
// <div id='RegistrationPage'>

//  <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

//     <script src="https://cdn.jsdelivr.net/momentjs/2.15.1/moment-with-locales.min.js"></script>

//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>

//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"/>

//     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

//     <link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet"/>
  
//     <link rel="stylesheet" href="style.css" type="text/css" />


//   <div className="row">
//     <div className="col-md-6 col-md-offset-3 enter_section">
//       <div className= "loginBody">
//         <div className="wrapper">
//           <div className="container">
//             <div className="sectionerReg">
//             <form method="post" action="#register">
//                 <h2 className = "text-center"><u>Register</u></h2>
//                 <div className="form-group">
//                   <label>First Name</label>
//                   <input type="text" className="form-control" placeholder="First Name" className="firstName" />
//                 </div>
//                 <div className="form-group">
//                   <label>Last Name</label>
//                   <input type="text" className="form-control" placeholder="Last Name" className="lastName" />
//                 </div>
//                 <div className="form-group">
//                   <label>Username</label>
//                   <input type="text" className="form-control" placeholder="Username" className="username" />
//                 </div>
//                 <div className="form-group">
//                   <label>Email</label>
//                   <input type="Email" className="form-control" placeholder="Email" className="email" />
//                 </div>
//                 <div className="form-group">
//                   <label>Password</label>
//                   <input type="password" className="form-control" placeholder="Password Between 7 - 20 Characters" className="password" />
//                 </div>
//                 <div className="form-group">
//                   <label>Confirm Password</label>
//                   <input type="password" className="form-control" placeholder="Confirm Your Password" className="password2" />
//                 </div>
//                 <div>
//                   <button type="submit" className="btn btn-primary" value="register">Submit</button>
//                 </div>
//             </form>
//               <br />
//               <button type="button" className="btn btn-default"><a href="#login">Already a member?</a></button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//     )
//   }
// }


