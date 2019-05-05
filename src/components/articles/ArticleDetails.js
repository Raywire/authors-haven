import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getArticle } from '../../store/actions/articleActions';

class ArticleDetails extends Component {
  // console.log(props);
  // const slug = props.match.params.slug;
  componentDidMount(){
    const slug = this.props.match.params.slug;
    this.props.getArticle(slug);
  }  
  // props.getArticle(slug);
  render(){
    const { article } = this.props;
    console.log(article);
    return (
      <div className="container section project-details">
        <div className="card depth-0">
          <div className="card-content">
            <div className="card-title">Article Title {}</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Raywire</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    article: state.article.article
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // const slug = ownProps.match.params.slug;
  return {
    getArticle: (slug) => dispatch(getArticle(slug))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);
