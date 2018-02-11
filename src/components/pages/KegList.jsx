import React from 'react';
import Keg from '../ui/Keg';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const masterList = [
  {name: 'Delicious IPA', brand: 'ninkasi', price: 6, abv: 10, pints: 12},
  {name: 'Amazing Lager', brand: 'rolling rock', price: 3, abv: 8, pints: 12},
  {name: 'Scrumptous Porter', brand: 'porters r us', price: 5, abv: 7, pints: 12},
  {name: 'Believable Stout', brand: 'guiness', price: 5, abv: 6, pints: 12},
  {name: 'Fake Pale Ale', brand: 'pyramid', price: 4, abv: 5, pints: 12}
];

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  }
});

function KegList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

      <Grid container spacing={24}>
        {masterList.map( (keg, index) =>
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
};

export default withStyles(styles)(KegList);
