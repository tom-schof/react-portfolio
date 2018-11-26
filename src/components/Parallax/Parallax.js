import React from 'react';
import { Parallax, Background } from 'react-parallax';
 
const ParallaxComponent = (props) => (
    <div>
        {/* -----basic config-----*/}
        <Parallax
            blur={0}
            bgImage={require("../../img/Lake.jpg")}
            bgImageAlt="lake"
            strength={500}
        >
            Put some text content here - even an empty div with fixed dimensions to have a height
            for the parallax.
            <div style={{ height: '1200px' }} />
        </Parallax>
 
       
 
     
 
    </div>
);
export default ParallaxComponent;