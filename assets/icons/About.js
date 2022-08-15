import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = (props) => (
  <Svg
    width={props.width}
    height={props.height}
    fill={props.color}
    x={0}
    y={0}
    viewBox="0 0 50 50">
    <Path
      className="st43"
      d="M25.2 48.4c-11.3 0-20.5-9.2-20.5-20.5S13.9 7.3 25.2 7.3s20.5 9.2 20.5 20.5-9.2 20.6-20.5 20.6zm0-39.1C15 9.3 6.7 17.6 6.7 27.8S15 46.4 25.2 46.4s18.5-8.3 18.5-18.5S35.4 9.3 25.2 9.3z"
    />
    <Path
      className="st43"
      d="M25.2 19.1c-.6 0-1-.4-1-1v-1.7c0-.6.4-1 1-1s1 .4 1 1v1.7c0 .6-.4 1-1 1zM25.2 40.2c-.6 0-1-.4-1-1V22.1c0-.6.4-1 1-1s1 .4 1 1v17.1c0 .6-.4 1-1 1z"
    />
  </Svg>
);

export default SvgComponent;
