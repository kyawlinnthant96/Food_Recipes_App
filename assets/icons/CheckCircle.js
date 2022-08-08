import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckCircle = props => (
  <Svg
    viewBox="0 -5 25 30"
    width={props.width}
    height={props.height}
    fill="none"
    stroke="green"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <Path d="M22 4 12 14.01l-3-3" />
  </Svg>
);

export default CheckCircle;
