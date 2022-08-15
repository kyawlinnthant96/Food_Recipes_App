import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const Search = (props) => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    width={props.width}
    height={props.height}
    stroke={props.color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Circle cx={11} cy={11} r={8} />
    <Path d="m21 21-4.35-4.35" />
  </Svg>
);

export default Search;
