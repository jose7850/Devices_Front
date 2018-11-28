import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPost, deletePost , updateDevice} from '../../actions';

class DeviceEdit extends Component {

  componentWillMount(){
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  handleInitialize(data) {
    const initData = {
      "name": data.name,
      "ip": "this.props.currentUser.lastName",
      "description": "this.props.currentUser.sex,"
    };

    this.props.initialize(initData);
  };


  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    const { id } = this.props.match.params;
    console.log(values);
    this.props.updateDevice(id, values, () => {
      this.props.history.push('/devices');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
    //this.handleInitialize(this.props.post);
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <Field
          label="Name"
          name="name"
          component={this.renderField}
        />
        <Field
          label="IP"
          name="ip"
          component={this.renderField}
        />
        <Field
          label="Description"
          name="description"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/devices" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }

  if (!values.content) {
    errors.content = "Enter some content!";
  }
  //If erros is empty, the form is fine to submit
  return errors;
  
}

function mapStateToProps({ posts, comments }, ownProps) {
  return { initialValues: posts[ownProps.match.params.id]};
}

DeviceEdit = reduxForm({
  validate,
  form: 'PostsEditForm', // a unique identifier for this form
  enableReinitialize : true
})(DeviceEdit)



// You have to connect() to any reducers that you wish to connect to yourself
DeviceEdit = connect(
  mapStateToProps,
  {updateDevice, fetchPost} // bind account loading action creator
)(DeviceEdit)

export default DeviceEdit