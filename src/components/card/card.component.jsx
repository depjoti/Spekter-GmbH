import React from 'react';
import './card.styles.css';
export const Card = (props) =>(
    <div className="card-container">
        {/* <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" /> */}
        <img src={`https://source.unsplash.com/random/150x150?${props.post.id}`} alt="users" />

        <h2>{props.post.title}</h2>
        <p>{props.post.body}</p>
    </div>
);