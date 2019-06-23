import React from "react";
import "./style.css";


function FriendCard(props) {
  return (
    <div className="card" onClick={() => props.removeFriend(props.id)}>
      <div className="img-container" onClick={() => props.handleIncrement(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
      
     
    </div>
  );
}


export default FriendCard;




