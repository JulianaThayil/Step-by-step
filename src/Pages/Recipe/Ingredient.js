import React, { Component } from 'react'
import PropTypes from 'prop-types';

//Mui stuff
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import classes from './styles.module.css';
export default class Ingredient extends Component {
    render() {
    
        const{ ingredient:{
            name,
            amount
        } 
    }= this.props;

        return (

            <TableRow>
              <TableCell  component="th" scope="row">
<h7 className={classes.textbold}> {name}</h7>
              </TableCell>
              <TableCell ><h7 className={classes.textbold}> {amount}</h7></TableCell>
             
            </TableRow>

        );
}
}
Ingredient.propTypes = {
    ingredient: PropTypes.object.isRequired
  };