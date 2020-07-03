import React, { Fragment } from 'react'
import classes from './Explore.module.css';
import Cover from '../../components/Cover/Cover'
import ExploreCard from '../../components/ExploreCards/ExploreCard'
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function Explore() {
    const post={
        image:"/assets/explore2.jpg",
        text:"Explore"
    }
    const courses = [
        {
          url: '/assets/starter.jpg',
          title: 'Starters',
        },
        {
          url: '/assets/maincourse.jpg',
          title: 'Main Course',
        },
        {
          url: '/assets/dessert.jpg',
          title: 'Desserts',
        },
      ];

      const cuisines = [
        {
          url: '/assets/chinese.jpg',
          title: 'Chinese',
        },
        {
          url: '/assets/indian.jpg',
          title: 'Indian',
        },
        {
          url: '/assets/pizza.jpg',
          title: 'Italian',
        },
        {
            url: '/assets/thai.jpg',
            title: 'Thai',
          },
          {
            url: '/assets/goan.jpg',
            title: 'Goan',
          },
          {
            url: '/assets/southindian.jpg',
            title: 'South Indian',
          },
      ];
    return (
        <Fragment>
            <Cover post={post}> </Cover>
            <div style={{marginLeft:'10vw',marginRight:'10vw'}}>
              <Typography  className={classes.recent}> Courses</Typography>
              <ExploreCard courses={courses}> </ExploreCard>
              <br/>
              <Typography  className={classes.recent}> Cuisines</Typography>
              <ExploreCard courses={cuisines}> </ExploreCard>
              <br/>
             </div>
        
        </Fragment>
    )
}
