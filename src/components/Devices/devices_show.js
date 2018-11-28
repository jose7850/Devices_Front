import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost , updateDevice} from '../../actions';


class DeviceShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    
    this.props.deletePost(id, () => {
      this.props.history.push('/devices');
    });
  }

  onUpdateClick() {
    const { id } = this.props.match.params;
    
    
    
      this.props.history.push('/devices/' + id + '/edit');
    
      
  }

  render() {
    const { post } = this.props;
    
   const { id } = this.props.match.params;
    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link to="/devices" className="btn btn-secondary">Back To Index</Link>
       
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >Delete Device</button>
         <button
          className="btn btn-primary pull-xs-right"
          onClick={this.onUpdateClick.bind(this)}
        >Update Device Device</button>
        
        <h4 className="post-title">{post.name}</h4>
        <p className="post-body">{post.description}</p>
        
      </div>
    );
  }
}

function mapStateToProps({ posts, comments }, ownProps) {
  return { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost, deletePost, updateDevice })(DeviceShow);