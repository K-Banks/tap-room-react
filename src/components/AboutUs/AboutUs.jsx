import React from 'react';
import styles from './AboutUs.css';

function AboutUs(){
  return(
    <div>
      <h1>About Us</h1>
      <h4>Ghibli taps has been a staple of anime culture since July, 2018. We specialize in beers inspired by the films of the legendary Japanese Animation Studio, Studio Ghibli. Feel free to stop by and enjoy a cold brew at our imaginary bar. We are located in Totoro's Hide-away, nested snugly in the hippocampal region of the world.</h4>
      <div className={styles.images}>
        <img src='https://vignette.wikia.nocookie.net/disney/images/3/31/Porco%27s_Plane_1.jpg/revision/latest?cb=20140524134917'/>
        <img src='https://media.giphy.com/media/76KSkNg6OfTMs/giphy.gif'/>
      </div>
    </div>
  );
}

export default AboutUs;
