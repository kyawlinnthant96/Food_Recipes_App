import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Gallery = props => (
  <Svg
    viewBox="0 0 32 32"
    width={props.width}
    height={props.height}
    fill={props.color}>
    <Path d="M25 2H7a5 5 0 0 0-5 5v18a5 5 0 0 0 5 5h18a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5ZM7 4h18a3 3 0 0 1 3 3v5.59l-1.88-1.88a3 3 0 0 0-4.24 0l-7.95 8-3-2.42a3 3 0 0 0-3.8 0L4 18.86V7a3 3 0 0 1 3-3Zm18 24H7a3 3 0 0 1-3-3v-3.53l4.38-3.66a1 1 0 0 1 1.27 0l3.73 3a1 1 0 0 0 1.33-.07l8.58-8.59a1 1 0 0 1 1.42 0L28 15.41V25a3 3 0 0 1-3 3Z" />
    <Path d="M10 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
  </Svg>
);

export default Gallery;
