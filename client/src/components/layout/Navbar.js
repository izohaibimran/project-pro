import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser} from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileAction';


class Navbar extends Component {

  componentDidMount() {
  }
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    let reg;
    if(user.type === 'admin'){
      reg = <li className="nav-item">
          <Link className="nav-link text-warning" to="/register">
            Register a User
          </Link>
        </li>
    }
    const authLinks = (
      <ul className="navbar-nav ml-auto">

      <li className="nav-item">
          <Link className="nav-link text-white" to="/profiles">
            Profiles
          </Link>
        </li>

      <li className="nav-item ">
          <Link className="nav-link text-white" to="/feed">
            Post Feed
          </Link>
        </li>
      

      <li className="nav-item">
      <Link className="nav-link text-white" to="/dashboard">
            Dashboard
          </Link>
          
        </li>

        
        <li className="nav-item">
          <Link className="nav-link text-white" to="/inbox">
            Inbox
          </Link>
      </li>
        
        <li className="nav-item">
          <a
            href="/"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link text-white"
          >
            <img
              className="rounded-circle text-white"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />({user.type}) Logout
          </a>
        </li>
        
        {reg}
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto text-white">
        
        <li className="nav-item text-white">
          <Link className="nav-link text-white" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-primary mb-4"  >
        <div className="container">
          <Link className="navbar-brand text-white" style={{fontFamily:'normal', fontSize:'35px'}} to="/">
            Project Pro 
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          
            
            {isAuthenticated ? authLinks : guestLinks}
          
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
