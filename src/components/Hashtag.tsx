import React from 'react';
import httpHelpers from '../utils/api_helpers';

export default function HashTag(props){
    const hashTagSearch = (query) =>{ 
    props.dispatch({
        type: 'STORE_QUERY',
        payload: query
      })
      const options = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query})
      }
      return httpHelpers("http://localhost:8000/api/v1/search",options).then((res: { result: any; hashtags: any; }) => {
        props.dispatch({
          type: 'UPDATE_TWEETS',
          payload: res.result
        })
        props.dispatch({
          type: 'SET_HASHTAGS',
          payload: res.hashtags
        })
      })
    }
    return(
        <div className="card__hashtag" onClick={() => hashTagSearch(props.hashtag)}>
            #{props.hashtag}
        </div>
    )
}