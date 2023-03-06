/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconEyeOff = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 256a416.853333 416.853333 0 0 1 376.32 234.666667 411.605333 411.605333 0 0 1-102.826667 133.12l60.16 60.16c59.306667-52.48 106.24-118.186667 135.68-193.28C907.52 303.36 725.333333 170.666667 512 170.666667c-54.186667 0-106.24 8.533333-155.306667 24.32l70.4 70.4C454.826667 259.84 482.986667 256 512 256z m-45.653333 48.64L554.666667 392.96c24.32 10.666667 43.946667 30.293333 54.613333 54.613333l88.32 88.32c3.413333-14.506667 5.973333-29.866667 5.973333-45.653333C704 384.426667 617.813333 298.666667 512 298.666667c-15.786667 0-30.72 2.133333-45.653333 5.973333zM85.76 165.12l114.346667 114.346667A500.821333 500.821333 0 0 0 42.666667 490.666667C116.48 677.973333 298.666667 810.666667 512 810.666667c64.853333 0 127.146667-12.373333 184.32-34.986667l145.92 145.92 60.16-60.16L145.92 104.533333 85.76 165.12z m320 320l111.36 111.36c-1.706667 0.426667-3.413333 0.853333-5.12 0.853333a106.666667 106.666667 0 0 1-106.666667-106.666666c0-2.133333 0.426667-3.413333 0.426667-5.546667z m-145.066667-145.066667l74.666667 74.666667a196.266667 196.266667 0 0 0-15.36 75.946667 192.298667 192.298667 0 0 0 267.52 176.64l41.813333 41.813333c-37.546667 10.24-76.8 16.213333-117.333333 16.213333a416.853333 416.853333 0 0 1-376.32-234.666666c29.866667-61.013333 73.386667-111.36 125.013333-150.613334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconEyeOff.defaultProps = {
  size: 18,
};

IconEyeOff = React.memo ? React.memo(IconEyeOff) : IconEyeOff;

export default IconEyeOff;
