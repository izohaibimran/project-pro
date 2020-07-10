import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing" style={{height:'547px', overflow:'auto'}}>
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center ">
                <h1 className=" mb-1 " >PROJECT PRO</h1>
                
                
                <p className="lead col-md-8 mx-auto">
                A Social Platform for Offices. Create a profile/portfolio, share posts and get help from other developers.
                </p>
                
                <hr />
               
                <Link to="/login" className="btn btn-lg btn-info">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
