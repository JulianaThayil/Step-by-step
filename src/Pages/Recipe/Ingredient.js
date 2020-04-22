import React, { Component } from 'react'
import PropTypes from 'prop-types';

//Mui stuff
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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
                {name}
              </TableCell>
              <TableCell >{amount}</TableCell>
             
            </TableRow>

        );
}
}
Ingredient.propTypes = {
    ingredient: PropTypes.object.isRequired
  };