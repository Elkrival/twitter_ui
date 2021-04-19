import React from 'react';
import Hashtag from './Hashtag'
export default function Card(props){
    console.log(props, "IN THE CITY")
    return(
        <div className="card w-full">
                <img className="card__image" src={props.data.profile_image_url} />
                <p className="card__username">@{props.data.screen_name}</p>
                <p>{props.data.text}</p>
                {props.data.hashtags.length > 0 ? props.data.hashtags.map((hash: string) => <Hashtag hashtag={hash} dispatch={props.dispatch} />) : null }
            </div>
    )
}