import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getArticle } from '../../store/actions/articleActions';
import moment from 'moment';
import PropTypes from 'prop-types';

class ArticleDetails extends Component {
  componentDidMount(){
    const slug = this.props.match.params.slug;
    this.props.getArticle(slug);
  }  

  render(){
    const { article, author } = this.props;
    return (
      <div className="container section project-details">
        <div className="card depth-0">
          <div className="card-content">
            <div className="card-title">{article.title}</div>
            <p>{article.body}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {author.username}</div>
            <div>{moment(article.date_created).fromNow()}</div>
          </div>
        </div>
      </div>
    )
  }
}

// Prevents Cannot read property “propertyname” of undefined
ArticleDetails.propTypes = {
  article: PropTypes.shape({}),
  author: PropTypes.shape({}),
};
ArticleDetails.defaultProps = {
  article: {},
  author: {},
};

const mapStateToProps = (state) => {
  return {
    article: state.articles.article,
    author: state.articles.author,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getArticle: (slug) => dispatch(getArticle(slug))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);
