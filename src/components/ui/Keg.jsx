import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Badge from 'material-ui/Badge';
import EditKeg from './EditKeg';

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

const flexBtns = {
  display: 'flex',
  justifyContent: 'space-between'
};

const price = {
  background: '#543a07',
  color: '#fff',
  padding: '5px 14px',
  display: 'inline-block',
  float: 'right'
};



function Keg(props) {
  const { classes } = props;

  function handleKegDeleteClick(){
    props.onKegDelete(props.id);
  }

  function handleSellPintClick(){
    props.onSellPint(props.id);
  }

  if (props.currentRoute === '/admin') {
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography style={price} className={classes.title}>${props.price}</Typography>
            <Typography variant="headline" component="h2">
              {props.name}
            </Typography>
            <Typography className={classes.pos}>ABV: {props.abv}%</Typography>
            <Typography component="p">
              a delicious beer brewed by {props.brand}
            </Typography>
          </CardContent>
          <CardActions style={flexBtns}>
            <Badge className={classes.margin} badgeContent={props.pints} color="secondary">
              <Button size="small" variant="raised" color="primary">Refill</Button>
            </Badge>
            <Typography variant="body1" align="right">
              <EditKeg   name={props.name}
                brand={props.brand}
                price={props.price}
                abv={props.abv}
                pints={props.pints}
                id={props.id}
                onKegEdit={props.onKegEdit} />
            </Typography>
            <Typography variant="body1" align="right">
              <Button onClick={handleKegDeleteClick}>Delete</Button>
            </Typography>
          </CardActions>
        </Card>
      </div>
    );
  } else {
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography style={price} className={classes.title}>${props.price}</Typography>
            <Typography variant="headline" component="h2">
              {props.name}
            </Typography>
            <Typography className={classes.pos}>ABV: {props.abv}%</Typography>
            <Typography component="p">
              a delicious beer brewed by {props.brand}
            </Typography>
          </CardContent>
          <CardActions style={flexBtns}>
            <Badge className={classes.margin} badgeContent={props.pints} color="secondary">
              <Button size="small" variant="raised" color="primary" onClick={handleSellPintClick}>Sell Pint</Button>
            </Badge>
          </CardActions>
        </Card>
      </div>
    );
  }
}

Keg.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  currentRoute: PropTypes.string,
  onKegDelete: PropTypes.func,
  onSellPint: PropTypes.func,
  onKegEdit: PropTypes.func
};

export default withStyles(styles)(Keg);
