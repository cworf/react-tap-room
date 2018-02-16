import React from 'react';
import KegList from '../ui/KegList';
import Typography from 'material-ui/Typography';

function Home() {

  return (
    <div >
      <Typography style={{marginTop:'30px'}} variant="display1" align="center" gutterBottom>
        Welcome! Check out our beers nowww
      </Typography>
      <KegList />
    </div>
  );
}

export default Home;
