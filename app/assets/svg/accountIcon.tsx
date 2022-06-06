import * as React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';

function AccountIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={20} {...props}>
      <G
        transform="translate(-3 -2)"
        opacity={0.599}
        fill="none"
        stroke="#2f2f2f"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}>
        <Path data-name="Path 31" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <Circle
          data-name="Ellipse 7"
          cx={4}
          cy={4}
          r={4}
          transform="translate(8 3)"
        />
      </G>
    </Svg>
  );
}

export default AccountIcon;
