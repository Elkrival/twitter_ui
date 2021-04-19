import React from 'react';
import Tweet from './Tweet'

export default function TweetList(props) {
    console.log(props)
        return (props.tweets && props.tweets.length > 0 ? props.tweets.map((el: any) =>
            <Tweet data={el} dispatch={props.dispatch}/>) : null )
}