import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
function AddKeg() {

  return (
    <div >
      <Typography style={{marginTop:'30px'}} variant="display1" gutterBottom>
        Check out our Beer!
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
          <div>
            <input placeholder="pints" />
          </div>
        </Paper>
      </form>
    </div>
  );
}

export default AddKeg;
