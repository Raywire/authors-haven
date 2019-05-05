const initState = {
  articles: [
    // {id: '1', title: 'Help me find peach', content: 'blah blah blah' },
    // {id: '2', title: 'Collect all the stars', content: 'blah blah blah' },
    // {id: '3', title: 'Egg hunt with Yoshi', content: 'blah blah blah' },
  ],
  loading: false,
  error: null,
}

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_ARTICLE':
      console.log('created article', action.response);
      return action.response;
    case 'CREATE_ARTICLE_ERROR':
      console.log('create article failed', action.error);
      return state;      
    case 'GET_ARTICLES':
      console.log('get articles');
      return state;
    case 'GET_ARTICLES_SUCCESSFUL':
      console.log('get articles successful', action.payload);
      // return {
      //   ...state,
      //   loading: false,
      //   articles: action.payload
      // };
      return action.payload;
    case 'GET_ARTICLES_FAILED':
      console.log('get articles failed');
      return state;
    case 'GET_ARTICLE':
      console.log('get article');
      return state;
    case 'GET_ARTICLE_SUCCESSFUL':
      console.log('get article successful', action.payload);
      return action.payload;
    case 'GET_ARTICLE_FAILED':
      console.log('get article failed');
      return state;       
    default:
      return state;    
  }
}

export default articleReducer;
