import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Person = props => (
  <Svg
    viewBox="0 -15 60 80"
    width={props.width}
    height={props.height}
    fill="#000">
    <Path
      d="M40.32 28.27C51.71 20.2 46.13 2.12 32 2c-14.14.1-19.71 18.2-8.31 26.25A27 27 0 0 0 5.08 53.88c0 9 4.89 9.75 13.14 5.74 10.59-4.9 17-4.89 27.58 0 7.69 3.71 13.19 3.76 13.14-5.74a27 27 0 0 0-18.62-25.61Zm-18.77-11.8A10.46 10.46 0 0 1 32 6c13.86.58 13.86 20.33 0 20.9a10.46 10.46 0 0 1-10.45-10.43Zm32.57 41.41c-.87.58-4.13-.82-6.74-1.94-4.24-1.81-9.51-4.06-15.37-4.06s-11.12 2.25-15.36 4.06c-2.62 1.12-5.87 2.52-6.74 1.94-.14-.09-.83-.71-.83-4a22.93 22.93 0 1 1 45.86 0c0 3.29-.69 3.91-.82 4Z"
      data-name="Layer 68"
    />
  </Svg>
);

export default Person;
