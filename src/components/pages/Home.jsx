import React from 'react';
import PropTypes from 'prop-types';
import KegList from '../ui/KegList';
import Typography from 'material-ui/Typography';

function Home(props) {

  return (
    <div >
      <Typography style={{marginTop:'30px'}} variant="display1" align="center" gutterBottom>
        Welcome! Check out our beers nowww
      </Typography>
      <KegList masterList={props.masterList}/>
    </div>
  );
}

Home.propTypes = {
  masterList: PropTypes.array.isRequired
};

export default Home;
