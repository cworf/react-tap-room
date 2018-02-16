import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class AddKeg extends React.Component {

  constructor(props){
    super(props);
    this._name;
    this._brand;
    this._price;
    this._abv;
    this._pints;
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleNewKegSubmit = this.handleNewKegSubmit.bind(this);
  }

  handleOpen(){
    this.setState({ open: true });
  }

  handleClose(){
    this.setState({ open: false });
  }

  handleNewKegSubmit(){
    this.props.onKegAdd({name: this._name.value, brand: this._brand.value, price: this._price.value, abv: this._abv.value, pints: this._pints.value});
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button variant="raised" color="primary" onClick={this.handleOpen}>Add a new keg</Button>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={{top: '50%',left: '50%',transform: 'translate(-50%, -50%)'}} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Add-a-keg
            </Typography>
            <Typography variant="body2" id="simple-modal-description">
              <form onSubmit={this.handleNewKegSubmit}>
                <div>
                  <input placeholder="name"
                    ref={(input) => {this._name = input;}} />
                </div>
                <div>
                  <input placeholder="brand"
                    ref={(input) => {this._brand = input;}} />
                </div>
                <div>
                  <input placeholder="price"
                    ref={(input) => {this._price = input;}} />
                </div>
                <div>
                  <input placeholder="abv"
                    ref={(input) => {this._abv = input;}} />
                </div>
                <div style={{marginBottom:'30px'}}>
                  <input placeholder="pints"
                    ref={(input) => {this._pints = input;}}/>
                </div>
                <Button size="small" type="submit" variant="raised" color="primary" align="left">Add</Button>
              </form>
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

AddKeg.propTypes = {
  classes: PropTypes.object.isRequired,
  onKegAdd: PropTypes.func
};

export default withStyles(styles)(AddKeg);
