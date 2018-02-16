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
        <AddKeg onKegAdd={props.onKegAdd} />
      </Typography>
      <KegList
        currentRoute={props.currentRoute}
        masterList={props.masterList}
        onKegDelete={props.onKegDelete}
      />
    </div>
  );
}

Admin.propTypes = {
  currentRoute:PropTypes.string,
  masterList: PropTypes.object.isRequired,
  onKegAdd: PropTypes.func,
  onKegDelete: PropTypes.func,
};

export default Admin;
