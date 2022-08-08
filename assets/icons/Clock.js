import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Clock = props => (
  <Svg
    width={props.width}
    height={props.height}
    fill={props.color}
    viewBox="0 0 24 24">
    <Path d="m19.74 7.68 1-1-1.45-1.39-1 1a10 10 0 1 0 1.42 1.42ZM12 22a8 8 0 1 1 8-8 8 8 0 0 1-8 8ZM7 1h10v2H7z" />
    <Path d="M13 14V8h-2v8h7v-2h-5z" />
  </Svg>
);

export default Clock;
