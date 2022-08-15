import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Delete = props => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    fill={props.color}>
    <Path d="m14.8 12 3.6-3.6c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L12 9.2 8.4 5.6c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8L9.2 12l-3.6 3.6c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6s1-.2 1.4-.6l3.6-3.6 3.6 3.6c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8L14.8 12z" />
  </Svg>
);

export default Delete;
