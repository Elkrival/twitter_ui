import React from 'react';
import Hashtag from './Hashtag'
import Header from './Header';

export default function HashtagList(props){
    console.log(props);
    return (
        <div className="hashtag_section pb-6">
            <Header text="Filter by Hashtag" />
            <div>{Array.isArray(props.hashtags) && props.hashtags.length > 0 ? props.hashtags.map(el => <Hashtag hashtag={el} dispatch={props.dispatch} />): null }
            </div>
        </div>
    )
}