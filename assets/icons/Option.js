import * as React from 'react';
import Svg, {Defs, G, Circle} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

const Option = props => (
  <Svg
    viewBox="0 0 24 24"
    fill={props.color}
    width={props.width}
    height={props.height}>
    <Defs></Defs>
    <G id="_83.option" data-name="83.option">
      <Circle className="cls-1" cx={3} cy={12} r={2} />
      <Circle className="cls-1" cx={21} cy={12} r={2} />
      <Circle className="cls-1" cx={12} cy={12} r={2} />
    </G>
  </Svg>
);

export default Option;
