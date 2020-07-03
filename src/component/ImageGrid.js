import React, {useState, useEffect} from 'react';
import '../App.css';

function ImageGrid(props) {
  return (
    <>
      <div className='icon'><span id='icon' onClick={props.hideGrid} style={{fontSize:"50px",cursor:"pointer"}}>&#10006;</span></div>
    <div className="grid-container">
   
      <div ><img  src={props.urlObj['0']}  alt="Trulli"></img></div>
      <div ><img  src={props.urlObj['1']}   alt="Trulli"></img></div>
      <div ><img  src={props.urlObj['2']}  alt="Trulli"></img></div>
   
      <div ><img   src={props.urlObj['3']}   alt="Trulli"></img></div>
      <div ><img  src={props.urlObj['4']}   alt="Trulli"></img></div>
      <div ><img  src={props.urlObj['5']}   alt="Trulli"></img></div>

      <div ><img   src={props.urlObj['6']}  alt="Trulli"></img></div>
      <div ><img  src={props.urlObj['7']}   alt="Trulli"></img></div>
      <div ><img  src={props.urlObj['8']}   alt="Trulli"></img></div>

    </div>
    </>
  );
}

export default ImageGrid;