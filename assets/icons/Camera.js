import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const Camera = props => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    fill="none"
    stroke="#000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <Circle cx={12} cy={13} r={4} />
  </Svg>
);

export default Camera;
