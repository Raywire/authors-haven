
import React from 'react';
import ArticleSummary from './ArticleSummary';
import { Link } from 'react-router-dom';

const ArticleList = ({articles}) => {
  return (
    <div className="article-list section">
      { articles && articles.map(article => {
        return (
          <Link to={`/articles/${article.slug}`} key={article.id}>
            <ArticleSummary article={article} />
        </Link>
        )
      })}
    </div>
  )
}

export default ArticleList;