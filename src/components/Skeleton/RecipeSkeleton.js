import React from 'react';
import PropTypes from 'prop-types';

//Mui stuff
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 280,
    margin: theme.spacing(2),
  },
  media: {
    height: 200,
  },
  div:{
    display: 'grid',
    gridTemplate: 'repeat(4, 1fr) / repeat(4, 1fr)',
    gap: '2% 1%',
  },
  
}));

export default function Media(props) {
  
  const classes = useStyles();

  const content = Array.from({ length: 8 }).map((item, index) => (
    <Card className={classes.card} key={index}>
      <CardHeader
        avatar={
            <Skeleton animation="wave" variant="circle" width={40} height={40} />
        }
        
        title={
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
        }
      subheader= {<Skeleton animation="wave" height={10} width="40%" /> }
      />
      
        <Skeleton animation="wave" variant="rect" className={classes.media} />
        <CardContent>
        
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
       
      </CardContent>
      
    </Card>
    ));

    return <div className={classes.div}>{content}</div>;

};

Media.propTypes = {
  loading: PropTypes.bool,
};

