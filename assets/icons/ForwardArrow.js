import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const Forward = (props) => (
  <Svg width={props.width} height={props.height} viewBox="0 0 8 24">
    <G fill="none" fillRule="evenodd">
      <Path opacity={0.87} d="M17 22H-7V-2h24z" />
      <Path
        d="M.38 19.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L2.15.98a1.25 1.25 0 0 0-1.77 0 1.25 1.25 0 0 0 0 1.77L7.62 10 .37 17.25c-.48.48-.48 1.28.01 1.76Z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default Forward;
