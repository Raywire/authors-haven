import axios from 'axios';
import { authHeader } from '../../helpers/authHeader';

const configUrls = {
  root: 'http://127.0.0.1:8000/api/articles/',
  resetlink: '',
};
const config = {
  headers: authHeader()
};

export const createArticle = (article) => {
    return (dispatch, getState) => {
      // make async call to database
      axios.post(configUrls.root,
        { article },
        config)
      .then(function (response) {
        console.log(response);
        dispatch({ type: 'CREATE_ARTICLE', response });
      })
      .catch(function (error) {
        console.log(error);
        dispatch({ type: 'CREATE_ARTICLE_ERROR', error });
      });
    }
  };

export const getArticles = () => {
    return (dispatch, getState) => {
      dispatch({ type: 'GET_ARTICLES' })
      axios.get('http://127.0.0.1:8000/api/articles/')
          .then(response => {
            if(response){
              dispatch({
                type: 'GET_ARTICLES_SUCCESSFUL',
                payload: response.data
              })              
            }
          }).catch((err) => {
            if(err.response){
              dispatch({ type: 'GET_ARTICLES_FAILED', payload: err.response.data })
            }            
          })
    }
}

export const getArticle = (slug) => {
  return (dispatch, getState) => {
    dispatch({ type: 'GET_ARTICLE' })
    let articleUrl = `http://127.0.0.1:8000/api/articles/${slug}/`;
    axios.get(articleUrl)
        .then(response => {
          if(response){
            dispatch({
              type: 'GET_ARTICLE_SUCCESSFUL',
              payload: response.data
            })              
          }
        }).catch((err) => {
          if(err.response){
            dispatch({ type: 'GET_ARTICLE_FAILED', payload: err.response.data })
          }            
        })
  }
}
