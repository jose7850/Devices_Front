import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDevices } from '../../actions';

class DevicesIndex extends Component {
  componentDidMount() {
    this.props.fetchDevices();
    
  }

  handleClick(id){
    console.log(id);
    this.props.history.push('/devices/' + id);
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <tr key={post.id} onClick={this.handleClick.bind(this, post.id)}>
          
            <td>{post.name}</td>
            <td>{post.ip}</td>
          
        </tr>
      );
    });
  }

  render() {

    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary"               to="/devices/new" >
            Add A Device
          </Link>
        </div>
        <h3>Devices</h3>
        <table className="table table-hover">
          <thead>
          <tr>
            <th>Name</th>
            <th>IP</th>
          </tr> 
          </thead>
          <tbody>
            {this.renderPosts()}
          </tbody>
        </table>
       
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchDevices })(DevicesIndex);