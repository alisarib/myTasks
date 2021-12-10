import Task from "./Task";
import React from 'react';
import arfa from './images/arfa.jpg';
import badsahi from './images/badsahi.jpg';
import sahi from './images/sahi.jpg';
import minar from './images/minar.jpg';
import shalamar from './images/shalamar.jpg';
import behria from './images/behria.jpg';
import css from './landingPage.module.css';

const colors = [arfa, badsahi, sahi, minar, shalamar, behria];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={css.slideshow}>
      <div
        className={css.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className={css.slide}
            key={index}
            // style={{ backgroundColor }}
          ><img src={backgroundColor} height="300px" width="100%" alt="GeeksforGeeks logo" /></div>
        ))}
      </div>

    </div>
  );
}


function LandingPage() {

  return (
    <div className={css.root}>
      <div>
        <h1 className={css.mainTitle}>Back to Pakistan</h1>
        <p className={css.mainSubTitle}>Top Destinations to visit in Lahore</p>
        {/* <marquee behavior="scroll" direction="left" bgcolor="gray" scrollamount="10" >
          <img src={arfa} height="300px" alt="GeeksforGeeks logo" />
          <img src={badsahi} height="300px" alt="GeeksforGeeks logo" />
          <img src={shalamar} height="300px" alt="GeeksforGeeks logo" />
          <img src={minar} height="300px" alt="GeeksforGeeks logo" />
          <img src={behria} height="300px" alt="GeeksforGeeks logo" />
          <img src={sahi} height="300px" alt="GeeksforGeeks logo" />
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" alt="GeeksforGeeks logo" />

        </marquee> */}
        <Slideshow/>
        {/* <iframe width="97%" height="300px" src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe> */}
      </div>
    </div>
  );
}
export default LandingPage;