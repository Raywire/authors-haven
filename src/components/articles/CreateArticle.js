import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createArticle } from '../../store/actions/articleActions';
import { Redirect } from 'react-router-dom';
import {  authStatus } from '../../helpers/authStatus';

class CreateArticle extends Component {
  state = {
    title: '',
    description: '',
    body: '',
    is_published: true,
    tags: [],
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createArticle(this.state);
  }

  render() {
    if (authStatus() === false) return <Redirect to="/" />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Article</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="description">Description</label>
            <textarea id="description" onChange={this.handleChange} className="materialize-textarea"/>
          </div>
          <div className="input-field">
            <label htmlFor="body">Body</label>
            <textarea id="body" onChange={this.handleChange} className="materialize-textarea"/>
          </div>
          <div className="input-field">
            <label htmlFor="tags">Tags</label>
            <input type="text" id="tags" onChange={this.handleChange}/>
          </div>        
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>         
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createArticle: (article) => dispatch(createArticle(article))
  }
}

export default connect(null, mapDispatchToProps)(CreateArticle);
