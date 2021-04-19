import React, { useReducer } from 'react';
import SearchBar from './components/SearchBar';
import TweetList from './components/TweetList'
import HashtagList from './components/HashtagList';
import Header from './components/Header'
import LoadMore from './components/Load_More';
interface AppProps {}

function reducer(state: any, action: { type: any; payload: any; }){
  switch(action.type) {
    case 'UPDATE_TWEETS' :
      return { ...state, tweets: action.payload}
    case 'STORE_QUERY': {
      return {...state, query: action.payload }
    }
    case 'SET_HASHTAGS': {
      return { ...state, hashtags: action.payload }
    }
    case 'SET_NEXT_RESULTS_QUERY': {
      return { ...state, next_results: action.payload }
    }
    case 'APPEND_TWEETS': {
      return { ...state, tweets: state.tweets.concat(action.payload) }
    }
  }

}
function App({}: AppProps) {
  const [state, dispatch] = useReducer(reducer, {query: '', tweets: [], hashtags: [], next_results: ''});
  return (
    <div style={{backgroundColor: "#D8DCDE"}}className="gap-4 h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6">
            <div className="row-start-1 max-w-screen-sm max-w-screen-md max-w-screen-lg max-w-screen-xl max-w-screen-2xl sm:col-start-2 sm:col-end-4 md:col-start-2 md:col-end-4 lg:col-start-2 lg:col-end-4 xl:col-start-2 xl:col-end-4 2xl:col-start-2 2xl:col-end-4">
        <Header text="Tweet Feed"/>
        </div>
      <div className="max-w-screen-sm max-w-screen-md max-w-screen-lg max-w-screen-xl max-w-screen-2xl col-start-1 sm:col-start-2 sm:col-end-4 md:col-start-2 md:col-end-4 lg:col-start-2 lg:col-end-4 xl:col-start-2 xl:col-end-4 2xl:col-start-2 2xl:col-end-4">
        <SearchBar dispatch={dispatch}/>
        </div>
        <div className=" row-start-3 sm:col-start-4 md:col-start-4 lg:col-start-4 xl:col-start-4  2xl:col-start-4"> 
          <HashtagList hashtags={state.hashtags} dispatch={dispatch} />
        </div>
        <div style={{boxShadow: "2px 4px 15px -5px #000000"}}className="max-w-screen-sm max-w-screen-md max-w-screen-lg max-w-screen-xl max-w-screen-2xl md:col-start-2 md:col-end-4 lg:col-start-2 lg:col-end-4 xl:col-start-2 xl:col-end-4 2xl:col-start-2 2xl:col-end-4">
        <TweetList tweets={state.tweets} dispatch={dispatch}/>
        {state.tweets.length > 0 ? <LoadMore next_results={state.next_results} dispatch={dispatch} /> : null }
      </div>
      </div>
  );
}

export default App;

