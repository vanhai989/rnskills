import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function HomeIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={22} {...props}>
      <G
        stroke="#828B8F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}>
        <Path
          data-name="Path 28"
          d="M1 8l9-7 9 7v11a2 2 0 01-2 2H3a2 2 0 01-2-2z"
          fill="none"
        />
        <Path
          data-name="Path 29"
          d="M7 21V11h6v10"
          fill="rgba(255,255,255,0)"
        />
      </G>
    </Svg>
  );
}

export default HomeIcon;
