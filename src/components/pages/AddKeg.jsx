import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
function AddKeg() {

  return (
    <div >
      <Typography variant="display1" gutterBottom>
        Check out our Beer!
      </Typography>
      <form>
        <Paper style={{textAlign:'center'}}>
          <div>
            <input placeholder="name" />
          </div>
        </Paper>
      </form>
    </div>
  );
}

export default AddKeg;
