import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Badge from 'material-ui/Badge';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  button: {
    margin: theme.spacing.unit,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

function Keg(props) {
  console.log(props);
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>${props.price}</Typography>
          <Typography variant="headline" component="h2">
            {props.name}
          </Typography>
          <Typography className={classes.pos}>ABV: {props.apv}%</Typography>
          <Typography component="p">
            a delicious beer brewed by {props.brand}
          </Typography>
        </CardContent>
        <CardActions>
          <Badge className={classes.margin} badgeContent={props.pints} color="secondary">
            <Button size="small" variant="raised" color="primary"jj>Sell Pint</Button>
          </Badge>
        </CardActions>
      </Card>
    </div>
  );
}

Keg.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  apv: PropTypes.number,
  pints: PropTypes.string
};

export default withStyles(styles)(Keg);
