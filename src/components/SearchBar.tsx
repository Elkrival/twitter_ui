import React, {useCallback, useEffect, useState, useRef} from 'react';
import debounce from 'lodash.debounce';
import httpHelpers from '../utils/api_helpers';

export default function SearchBar(props: any){
  const isInitialMount = useRef(true);
  const [userQuery, setUserQuery] = useState("");
  //API Function
  const sendQuery = (query: string) => {
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
    return httpHelpers("http://localhost:8000/api/v1/search",options).then((res: { result: any; hashtags: any; next_results: any; }) => {
      props.dispatch({
        type: 'UPDATE_TWEETS',
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
  const updateQuery = () => sendQuery(userQuery);
  const delayedQuery = useCallback(debounce(updateQuery, 1000), [userQuery])
  useEffect(() =>{
    if(isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      delayedQuery()
      return delayedQuery.cancel
    }
  }, [userQuery, delayedQuery])
  const handleChange= (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUserQuery(e.target.value)
  }

    return(
        <div className="relative text-gray-600 focus-within:text-gray-400 ">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </span>
      <div className="py-2"><input onKeyUp={handleChange} className="w-full px-2 py-2 text-sm text-white bg-gray-white pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search by keyword"/>
    </div>
    </div>
    )
}