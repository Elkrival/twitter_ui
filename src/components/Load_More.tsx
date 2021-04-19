import React from 'react';
import httpHelpers from '../utils/api_helpers';

export default function LoadMore(props){
    const onLoadMoreTweets= (next_results) => {
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({next_results})
          }
          return httpHelpers("http://localhost:8000/api/v1/next-results",options).then((res: { result: any; hashtags: any; next_results: any; }) => {
            props.dispatch({
              type: 'APPEND_TWEETS',
              payload: res.result
            })
            props.dispatch({
              type: 'SET_HASHTAGS',
              payload: res.hashtags
            })
            props.dispatch({
              type: 'SET_NEXT_RESULTS_QUERY',
              payload: res.next_results
            })
          })
    }
    return(
        <div className="btn__container">
        <button className="btn" onClick={() => onLoadMoreTweets(props.next_results)}>Load More</button>
        </div>
    )
}