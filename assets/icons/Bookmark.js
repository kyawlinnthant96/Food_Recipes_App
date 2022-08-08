import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Bookmark = props => (
  <Svg
    width={props.width}
    height={props.height}
    fill={props.color}
    viewBox="0 0 400 800">
    <Path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z" />
  </Svg>
);

export default Bookmark;
