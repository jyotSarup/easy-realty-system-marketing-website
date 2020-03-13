import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  export default function Services() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        Services
      </div>
    );
  }
