import React from 'react';
import Keg from '../ui/Keg';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  }
});

function KegList(props) {
  const { classes } = props;
  console.log(props);
  return (
    <div style={{maxWidth:'1300px', margin:'auto'}} className={classes.root}>
      <Grid container spacing={24}>
        {props.masterList.map( (keg, index) =>
          <Grid item xs={3} key={index}>
            <Keg name={keg.name}
              brand={keg.brand}
              price={keg.price}
              abv={keg.abv}
              pints={keg.pints}/>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

KegList.propTypes = {
  classes: PropTypes.object.isRequired,
  masterList: PropTypes.array.isRequired
};

export default withStyles(styles)(KegList);
