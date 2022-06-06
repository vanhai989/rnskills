import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function MoreIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={14} {...props}>
      <G
        fill="none"
        stroke="#00ab9d"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}>
        <Path data-name="Line 8" d="M1 7h18" />
        <Path data-name="Line 9" d="M1 1h18" />
        <Path data-name="Line 10" d="M1 13h18" />
      </G>
    </Svg>
  );
}

export default MoreIcon;
