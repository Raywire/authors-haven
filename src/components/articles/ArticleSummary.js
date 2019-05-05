
import React from 'react';
import moment from 'moment';

const ArticleSummary = ({article}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content gray-text text-darkent-3">
        <span className="card-title">{article.title}</span>
        <p>Posted by {article.author.username}</p>
        <p className="grey-text">{moment(article.date_created).fromNow()}</p>
      </div>
    </div>    
  )
}

export default ArticleSummary;
