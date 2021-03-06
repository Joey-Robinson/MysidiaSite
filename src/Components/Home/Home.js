import React from 'react';
import { Card, CardTitle } from 'react-materialize';
import MemberSpotlight from '../../Containers/MemberSpotlight/MemberSpotlight';

const Home = () => (
  <div className="HomeContainer">
    <img
      id="HomeImage"
      src="https://cdn.discordapp.com/attachments/415463104579895296/446343842179055646/Logo2-resized.png" 
      alt="Mysidia, Myst, Free Company, FC, FF14, Final Fantasy 14, Cactuar, Casual Free Company, Casual FC, Friendly FC."
    />
    <hr className="HRHome" />
    <div className="MemberSpotlight">
    <p className="MemberSpotlightText" >
    Congratulations to Rajhiem Yaranco!!! Your helpfulness,
    friendliness and positive attitude and overall contributions to
    the FC have been noticed and we are happy to recognize you
    for our Member Spotlight! Thank you for being awesome, and see you in game!
    <MemberSpotlight />
    </p>
      <img
        id="MemberSpotlightImage"
        src="https://s3-us-west-2.amazonaws.com/mystassets/test001.png" 
        alt="Final Fantasy 14, Mysidia, Myst, Free Company, FC, Chocobo, Cactuar, Casual FC, Friendly FC"
      />
    </div>
  </div>
);

export default Home;