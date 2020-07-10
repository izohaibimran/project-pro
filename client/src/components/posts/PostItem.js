import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      like: false,
      likesLength: 0
    };
    this.findUserLike(this.props.post.likes);
  }
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    if(this.like === false)
    {
      this.like= true ;
      this.likesLength++;
      this.props.addLike(id);

    }
    else if(this.like === true)
    {
      this.like= false ;
      this.likesLength--;
      this.props.removeLike(id);
    }
    this.setState({ likes: this.likes });
   }

  findUserLike(likes) {
    const { auth } = this.props;
    this.likesLength=this.props.post.likes.length;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      this.like=true;
    } else {
      this.like=false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;
    
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={post.avatar}
                alt=""
              />
            </a>
            <br />
            <p className="text-center">{post.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{post.text}</p>
            {showActions ? (
              <span>
                <button
                  onClick={this.onLikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i
                    className={classnames('fas fa-thumbs-up', {
                      'text-info': this.like
                    })}
                  />
                  <span className="badge badge-light">{this.likesLength}</span>
                </button>
                
                <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                  Comments
                </Link>
                {post.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-danger mr-1"
                  >
                    <i className="fas fa-times" />
                  </button>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
