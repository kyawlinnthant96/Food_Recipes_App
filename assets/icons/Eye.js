import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const Eye = props => (
  <Svg
    viewBox="0 -5 24 30"
    width={props.width}
    height={props.height}
    fill="none"
    stroke="#222"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <Circle cx={12} cy={12} r={3} />
  </Svg>
);

export default Eye;
