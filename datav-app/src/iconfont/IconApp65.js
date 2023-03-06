/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconApp65 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1609 1024" width={size} height={size} {...rest}>
      <Path
        d="M365.385307 731.282359c-80.855572 0-146.358821 65.503248-146.35882 146.35882s65.503248 146.358821 146.35882 146.358821 146.358821-65.503248 146.358821-146.358821c0-81.367316-65.503248-146.358821-146.358821-146.35882z m1023.488256 145.847076c0-80.855572-65.503248-146.358821-146.35882-146.35882s-146.358821 65.503248-146.358821 146.35882S1161.65917 1023.488256 1242.514743 1023.488256s146.358821-65.503248 146.35882-146.358821z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M0 36.333833v804.461769c0 19.958021 16.375812 36.333833 36.845577 36.333833h109.513244c0-121.283358 98.254873-219.538231 219.53823-219.538231s219.538231 98.254873 219.538231 219.538231H1023.488256c0-121.283358 98.254873-219.538231 219.538231-219.538231s219.538231 98.254873 219.538231 219.538231h110.024987c19.958021 0 36.333833-16.375812 36.333833-36.845577V521.97901c0-20.469765-1.535232-53.221389-7.164418-72.155922l-260.989505-350.544727c-13.817091-14.328836-41.451274-26.098951-61.409295-26.098951h-292.717641c-19.958021 0-36.333833 15.864068-36.333833 36.845578v548.077961h-73.179411V36.333833c0-19.958021-16.375812-36.333833-36.845577-36.333833H36.333833C16.375812 0 0 16.375812 0 36.333833z m1055.728136 187.298351c0-19.958021 16.375812-36.845577 36.333833-36.845577h173.993004c20.469765 0 45.545227 13.305347 56.803598 29.681159l131.518241 191.904048c11.258371 16.375812 4.093953 29.681159-15.864068 29.68116h-346.450775c-19.958021 0-36.333833-16.375812-36.333833-36.845578V223.632184z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M0 0h950.82059v658.614693H0z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
    </Svg>
  );
};

IconApp65.defaultProps = {
  size: 18,
};

IconApp65 = React.memo ? React.memo(IconApp65) : IconApp65;

export default IconApp65;
