import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ServicesImg from "./assets/services.png";
import ServicesDashboard from "./assets/services_dash.png";
import ServicesListings from "./assets/services_listings.png";
import ServicesRealtors from "./assets/services_realtors.png";
import ServicesBall1 from "./assets/services_ball1.png";
import ServicesBall2 from "./assets/services_ball2.png";
import ServicesBall3 from "./assets/services_ball3.png";



const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
  },
  wrap: {
    backgroundImage: `url(${ServicesImg})`,
    height: "25vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    textAlign: "center",
    color: "#fff",
    padding: "auto",
    marginBottom: "60px",
  },
  wrapContent: {
    display: "grid",
    margin: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  dashImg: {
    backgroundImage: `url(${ServicesDashboard})`,
    width: "100%",
    height: "300px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain"
  },
  listImg: {
    backgroundImage: `url(${ServicesListings})`,
    width: "100%",
    height: "300px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain"
  },
  realImg: {
    backgroundImage: `url(${ServicesRealtors})`,
    width: "100%",
    height: "300px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain"
  },
  titles: {
    textAlign: "center",
    color: '#2B879E',
    fontWeight: "bold",
  },
  description: {
    margin: "auto",
    padding: "0 20px",
  },
  outContainer: {
    position: "relative",
    zIndex: "0",
  },
  ball1: {
    position: "absolute",
    top: "320px",
    left: "0",
    width: "30%",
    height: "300px",
    backgroundImage: `url(${ServicesBall1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundSize: "contain",
    zIndex: "-1",
  },
  ball2: {
    position: "absolute",
    top: "570px",
    right: "0",
    width: "30%",
    height: "300px",
    backgroundImage: `url(${ServicesBall2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "contain",
    zIndex: "-1",
  },
  ball3: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "200px",
    backgroundImage: `url(${ServicesBall3})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    zIndex: "-1",
  },
  smallGrid: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    }
  },
  largeGrid: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
}));

export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.outContainer}>
        <div className={classes.ball1}></div>
        <div className={classes.ball2}></div>
        <div className={classes.ball3}></div>
        <div className={classes.wrap} >
          <div className={classes.wrapContent}>
            <h1>SERVICES</h1>
            <p>
              The best solutions for your Real State Business
        </p>
          </div>
        </div>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <h2 className={classes.titles}>Dashboard</h2>
            <div className={classes.dashImg}></div>
          </Grid>
          <Grid className={classes.description} item xs={12} sm={12} md={12} lg={6} xl={6}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar ligula vel justo pharetra ornare. Nullam sollicitudin molestie felis quis pulvinar. Nullam ut nunc at nulla pulvinar fringilla. Etiam porttitor vestibulum enim nec tincidunt. Morbi et libero augue. Donec a lacus eu sem eleifend tristique sit amet sed risus. Duis rhoncus, nulla sed rhoncus maximus, arcu leo dictum turpis, ac porta leo justo nec leo. Etiam non arcu semper, malesuada lorem nec, pharetra sapien. Integer id efficitur lectus. Nulla velit nisi, varius eget accumsan id, pellentesque ac justo. Sed porttitor commodo urna, sed efficitur eros commodo sed. Cras tincidunt felis id mauris auctor, at placerat tellus tempor. Etiam non lorem venenatis dui ultrices placerat vel sed purus.</p>
          </Grid>
        </Grid>
        <br></br>
        <Grid container className={classes.largeGrid}>
          <Grid className={classes.description} item xs={12} sm={12} md={6} lg={6} xl={6}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar ligula vel justo pharetra ornare. Nullam sollicitudin molestie felis quis pulvinar. Nullam ut nunc at nulla pulvinar fringilla. Etiam porttitor vestibulum enim nec tincidunt. Morbi et libero augue. Donec a lacus eu sem eleifend tristique sit amet sed risus. Duis rhoncus, nulla sed rhoncus maximus, arcu leo dictum turpis, ac porta leo justo nec leo. Etiam non arcu semper, malesuada lorem nec, pharetra sapien. Integer id efficitur lectus. Nulla velit nisi, varius eget accumsan id, pellentesque ac justo. Sed porttitor commodo urna, sed efficitur eros commodo sed. Cras tincidunt felis id mauris auctor, at placerat tellus tempor. Etiam non lorem venenatis dui ultrices placerat vel sed purus.</p>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <h2 className={classes.titles}>Listings</h2>
            <div className={classes.listImg}></div>
          </Grid>
        </Grid>
        <Grid container className={classes.smallGrid}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <h2 className={classes.titles}>Listings</h2>
            <div className={classes.listImg}></div>
          </Grid>
          <Grid className={classes.description} item xs={12} sm={12} md={12} lg={6} xl={6}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar ligula vel justo pharetra ornare. Nullam sollicitudin molestie felis quis pulvinar. Nullam ut nunc at nulla pulvinar fringilla. Etiam porttitor vestibulum enim nec tincidunt. Morbi et libero augue. Donec a lacus eu sem eleifend tristique sit amet sed risus. Duis rhoncus, nulla sed rhoncus maximus, arcu leo dictum turpis, ac porta leo justo nec leo. Etiam non arcu semper, malesuada lorem nec, pharetra sapien. Integer id efficitur lectus. Nulla velit nisi, varius eget accumsan id, pellentesque ac justo. Sed porttitor commodo urna, sed efficitur eros commodo sed. Cras tincidunt felis id mauris auctor, at placerat tellus tempor. Etiam non lorem venenatis dui ultrices placerat vel sed purus.</p>
          </Grid>
        </Grid>
        <br></br>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <h2 className={classes.titles}>Realtors</h2>
            <div className={classes.realImg}></div>
          </Grid>
          <Grid className={classes.description} item xs={12} sm={12} md={12} lg={6} xl={6}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar ligula vel justo pharetra ornare. Nullam sollicitudin molestie felis quis pulvinar. Nullam ut nunc at nulla pulvinar fringilla. Etiam porttitor vestibulum enim nec tincidunt. Morbi et libero augue. Donec a lacus eu sem eleifend tristique sit amet sed risus. Duis rhoncus, nulla sed rhoncus maximus, arcu leo dictum turpis, ac porta leo justo nec leo. Etiam non arcu semper, malesuada lorem nec, pharetra sapien. Integer id efficitur lectus. Nulla velit nisi, varius eget accumsan id, pellentesque ac justo. Sed porttitor commodo urna, sed efficitur eros commodo sed. Cras tincidunt felis id mauris auctor, at placerat tellus tempor. Etiam non lorem venenatis dui ultrices placerat vel sed purus.</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}