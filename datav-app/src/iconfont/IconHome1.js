/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconHome1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M886.625 504.46651798a28.14508905 28.14508905 0 1 0 38.27008905-41.22321405L531.16517892 97.65848203a28.14508905 28.14508905 0 0 0-38.33035784-1e-8L99.16517893 463.18303595a28.14508905 28.14508905 0 0 0 38.27008904 41.22321405L512 156.66071406l374.625 347.80580392zM568.22991094 652.60491094V849.5c0 15.54910702 12.65625 28.14508905 28.14508906 28.14508905h196.89508906a28.14508905 28.14508905 0 0 0 28.08482189-28.14508905V512a28.14508905 28.14508905 0 0 0-56.22991095 0v309.35491095H624.52008906V624.52008906A28.14508905 28.14508905 0 0 0 596.375 596.375H425.27455393a28.14508905 28.14508905 0 0 0-28.0848219 28.14508905v196.83482189H258.875V512a28.14508905 28.14508905 0 0 0-56.22991094 0v337.5c0 15.54910702 12.59598202 28.14508905 28.08482189 28.14508905h194.54464298a28.14508905 28.14508905 0 0 0 28.14508905-28.14508905V652.60491094h114.81026797z m225.04017812-449.95982188v84.37499999a28.14508905 28.14508905 0 0 0 56.22991094 0V174.5a28.14508905 28.14508905 0 0 0-28.14508906-28.14508905H680.75a28.14508905 28.14508905 0 0 0 0 56.29017811h112.52008906z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconHome1.defaultProps = {
  size: 18,
};

IconHome1 = React.memo ? React.memo(IconHome1) : IconHome1;

export default IconHome1;
