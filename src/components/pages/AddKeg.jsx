import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

function AddKeg() {

  return (
    <div >
      <Typography style={{marginTop:'30px'}} variant="display1" align="center" gutterBottom>
        Add a beer
      </Typography>
      <form style={{width: '30%', margin: '50px auto'}}>
        <Paper style={{textAlign:'center', padding:'30px'}}>
          <div>
            <input placeholder="name" />
          </div>
          <div>
            <input placeholder="brand" />
          </div>
          <div>
            <input placeholder="price" />
          </div>
          <div>
            <input placeholder="abv" />
          </div>
          <div style={{marginBottom:'30px'}}>
            <input placeholder="pints"/>
          </div>
          <Button size="small" variant="raised" color="primary" align="left">Add</Button>
        </Paper>
      </form>
    </div>
  );
}

export default AddKeg;
