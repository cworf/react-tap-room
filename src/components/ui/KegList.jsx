import React from 'react';
import Keg from '../ui/Keg';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';


const styles = {
  root: {
    flexGrow: 1,
    marginTop: 30,
  }
};

function KegList(props) {
  const { classes } = props;
  return (
    <div style={{maxWidth:'1300px', margin:'auto'}} className={classes.root}>
      <Grid container spacing={24}>
        {Object.keys(props.masterList).map(function(kegId){
          const keg = props.masterList[kegId];
          return <Grid item xs={3} key={kegId}>
            <Keg name={keg.name}
              brand={keg.brand}
              price={keg.price}
              abv={keg.abv}
              pints={keg.pints}
              id={keg.id}
              currentRoute={props.currentRoute}
              onKegDelete={props.onKegDelete}/>
          </Grid>;
        })}
      </Grid>
    </div>
  );
}

KegList.propTypes = {
  classes: PropTypes.object.isRequired,
  masterList: PropTypes.object.isRequired,
  currentRoute: PropTypes.string,
  onKegDelete: PropTypes.func,
};

export default withStyles(styles)(KegList);
