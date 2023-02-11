import React, { useState } from 'react';
import '../style/info.css';

export function Info(props) {

  // TODO: create a timestamp useState() variable with initial value set
  // to the timestamp attribute from props


  const updateTimestamp = () => {
    // TODO: update the timestamp with the current date and time. 
    // Use (new Date()).toISOString() to get the current date and time.


  }

  // Text defaults. Feel free to add your own!
  const move = "Quick Attack"
  const description = "Flip a coin. If heads, this attack does 10 more damage."
  const damage = "10+"


  // Return some JSX here...
  return (
    <div id="info">
      <div id="move-header">
        <div id="move">
          <h3>{move}</h3>
        </div>
        <div id="damage">
          <h3>{damage}</h3>
        </div>
      </div>
      <div id="description">
        <p>{description} </p>
      </div>
      <div id="timestamp">
        Loaded at {props.timestamp}
      </div>

      <div id="button-container">
        <button onClick={updateTimestamp}>Refresh </button>
      </div>
    </div >
  );
}
