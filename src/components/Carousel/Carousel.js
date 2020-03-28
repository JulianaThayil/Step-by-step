import React, { Component } from 'react';
import classes from './Carousel.module.css';
import {Link} from 'react-router-dom'
const Carousel =()=>
{
  return (
    <div className={classes.card}>
      <div className={classes.text}> 
        <h5 >Share your kitchen stories</h5>
        
          </div>
          <div>
             <img width= "90%" height="90%" src="/assets/main.jpg"/> 
          </div>
    </div>
  );

}


export default Carousel;
