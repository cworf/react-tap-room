import React from 'react';
import PropTypes from 'prop-types';
import KegList from '../ui/KegList';
import Typography from 'material-ui/Typography';

function Admin(props) {

  return (
    <div >
      <Typography style={{marginTop:'30px'}} variant="display1" align="center" gutterBottom>
        Hello admin, you are in charge nowwww
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
