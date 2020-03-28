import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import AccountCircle from '@material-ui/icons/AccountCircle';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import classes from './Editprofile.module.css';

export default function EditProfile() {
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.main}>
      <TextField
        id="input-with-icon-textfield"
        label="Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />


         <TextField
          id="standard-multiline-static"
          label="Bio"
          multiline
          rows="4"
         
        />
        <TextField id="standard-required" label="Website" />
        <TextField id="standard-required" label="Location"  />

        <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>

      </div>
     
    </form>
  );
}
