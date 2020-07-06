import React, { Fragment } from 'react'
import classes from './Explore.module.css';

//My components
import Cover from '../../components/Cover/Cover'
import ExploreCard from '../../components/ExploreCards/ExploreCard'

//Mui
import Typography from "@material-ui/core/Typography";

export default function Explore() {
    const post={
        image:"/assets/explore2.jpg",
        text:"Explore"
    }
    const courses = [
        {
          url: '/assets/starter.jpg',
          title: 'Starters',
          category:'courses',
          target:'starters',
        },
        {
          url: '/assets/maincourse.jpg',
          title: 'Main Course',
          category:'courses',
          target:'main-course',
        },
        {
          url: '/assets/dessert.jpg',
          title: 'Desserts',
          category:'courses',
          target:'desserts'
        },
      ];

      const cuisines = [
        {
          url: '/assets/chinese.jpg',
          title: 'Chinese',
          category:'cuisines',
          target:'chinese'
        },
        {
          url: '/assets/indian.jpg',
          title: 'Indian',
          category:'cuisines',
          target:'indian'
        },
        {
          url: '/assets/pizza.jpg',
          title: 'Italian',
          category:'cuisines',
          target:'italian'

        },
        {
            url: '/assets/thai.jpg',
            title: 'Thai',
            category:'cuisines',
            target:'thai'
          },
          {
            url: '/assets/goan.jpg',
            title: 'Goan',
            category:'cuisines',
            target:'goan'
          },
          {
            url: '/assets/southindian.jpg',
            title: 'South Indian',
            category:'cuisines',
            target:'south-indian'
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
