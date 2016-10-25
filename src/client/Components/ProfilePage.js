import React, {Component} from 'react';



// export default class ProfilePage extends Component {
//   render() {
//     return (
//       <div id='ProfilePage'>
//         ProfilePage
//       </div>
//     )
//   }
// }


const ProfilePage = React.createClass({
  render: () => {
    return (
      <div>This is the profile page</div>

      <div className="container">
    <div className="row profile">
    <div className="col-md-3">
      <div className="profile-sidebar">
        
        <div className="profile-userpic">
          <img src="https://media4.giphy.com/media/10ECejNtM1GyRy/200_s.gif" alt="">
        </div>
        
        <div className="profile-usertitle">
          <div className="profile-usertitle-name">
            Paul Castro
          </div>
          <div className="profile-usertitle-job">
            Web Developer
          </div>
        </div>
       
        <div className="profile-userbuttons">
          <button type="button" className="btn btn-success btn-sm"> <a href="#search">Flights</a></button>
          <button type="button" className="btn btn-danger btn-sm">Message</button>
        </div>
       
        <div className="profile-usermenu">
          <ul className="nav">
            <li className="active">
              <a href="#">
              <i className="glyphicon glyphicon-home"></i>
              Overview </a>
            </li>
            <li>
              <a href="#">
              <i className="glyphicon glyphicon-user"></i>
              Account Settings </a>
            </li>
            <li>
              <a href="#">
              <i className="glyphicon glyphicon-ok"></i>
              Tasks </a>
            </li>
            <li>
              <a href="#">
              <i className="glyphicon glyphicon-flag"></i>
              Help </a>
            </li>
          </ul>
        </div>
       
      </div>
    </div>
    <div className="col-md-9">
            <div class="profile-content">
        Time to get started! 
            </div>
    </div>
  </div>
</div>

    );
  },
});

export default ProfilePage;