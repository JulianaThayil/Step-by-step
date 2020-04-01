import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

class AddRecipe extends Component {
    render() {
        return (
            <div>
                
     <Tooltip placement="top" title="Add Recipe">
    < Fab color="primary" aria-label="add" size="small"  >
        <AddIcon />
      </Fab>
      </Tooltip>
                
            </div>
        )
    }
}

export default AddRecipe
