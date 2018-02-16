import React from 'react';
import PropTypes from 'prop-types';
import KegList from '../ui/KegList';
import AddKeg from '../ui/AddKeg';
import Typography from 'material-ui/Typography';

function Admin(props) {

  return (
    <div >
      <Typography style={{marginTop:'30px'}} variant="display1" align="center" gutterBottom>
        Hello admin, you are in charge nowwww
      </Typography>
      <Typography style={{marginTop:'30px'}} variant="body1" align="center" gutterBottom>
        <AddKeg />
      </Typography>
      <KegList
        currentRoute={props.currentRoute}
        masterList={props.masterList}
      />
    </div>
  );
}

Admin.propTypes = {
  currentRoute:PropTypes.string,
  masterList: PropTypes.array.isRequired
};

export default Admin;
