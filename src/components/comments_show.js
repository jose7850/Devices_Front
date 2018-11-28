import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCommentsByPost } from '../actions/comments_action'; 

class Comments extends Component{
  componentDidMount(){
    const {postId} = this.props;
    console.log(postId);
    this.props.fetchCommentsByPost(postId);
  }

  renderComments(comments){
    return _.map(comments, comment => {
      return(
        <li className="list-group-item">
          <h6>UserName: {comment.email}</h6>
          <p>{comment.body}</p>
        </li>
      );
    });
  }

  render(){
    const {comments } = this.props;
    console.log(comments);
    return (
      <div>Comments
        <ul className="list-group">{this.renderComments(comments)}</ul>
      </div>
    );
  }
}

//export default Comments;

function mapStateToProps({ comments }, ownProps) {
  return { comments};
}

export default connect(mapStateToProps, { fetchCommentsByPost })(Comments);