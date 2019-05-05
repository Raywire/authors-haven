import React, { Component } from 'react';
import Notifications from './Notifications';
import ArticleList from '../articles/ArticleList';
import { connect } from 'react-redux';
import { getArticles } from '../../store/actions/articleActions';

class Home extends Component {

  componentDidMount(){
    this.props.getArticles()
  }  
  render(){
    const { articles } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ArticleList articles={articles} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    articles: state.article.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => dispatch(getArticles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
