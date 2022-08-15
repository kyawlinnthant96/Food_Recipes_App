import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Edit = (props) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    fill="none"
    stroke={props.color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
    <Path d="m18 2 4 4-10 10H8v-4L18 2z" />
  </Svg>
);

export default Edit;
