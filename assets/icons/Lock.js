import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const Lock = props => (
  <Svg
    viewBox="0 -7 24 30"
    fill="none"
    width={props.width}
    height={props.height}
    stroke="#000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-lock"
    {...props}>
    <Rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
    <Path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Svg>
);

export default Lock;
