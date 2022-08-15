import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Add = props => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    fill="#000"
    stroke="#000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M12 5v14M5 12h14" />
  </Svg>
);

export default Add;
