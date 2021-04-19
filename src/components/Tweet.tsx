import React from 'react';
import Card from './Card';
export default function Tweet(props: any){
    return (
        <Card data={props.data} dispatch={props.dispatch}/>
   )
}