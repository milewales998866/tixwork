/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconApp012 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M62 546.40779629V477.14242871c0-9.44527763 7.64617676-17.0914544 17.0914544-17.09145439h864.9175412c9.44527763 0 17.0914544 7.64617676 17.0914544 17.09145439v69.26536757c0 9.44527763-7.64617676 17.0914544-17.0914544 17.0914544H79.0914544c-9.44527763 0-17.0914544-7.64617676-17.0914544-17.0914544zM162.29985049 196.9325334v210.94452773c0 9.44527763-7.64617676 17.0914544-17.0914544 17.0914544H79.0914544C69.64617675 424.96851553 62 417.32233877 62 407.87706113V131.26536758C62 93.03448291 93.03448291 62 131.26536758 62h276.61169356c9.44527763 0 17.0914544 7.64617676 17.09145439 17.0914544v66.11694169c0 9.44527763-7.64617676 17.0914544-17.09145439 17.0914544H196.9325334c-18.8905544 0-34.63268378 15.74212852-34.63268291 34.6326829z m698.95052402-1e-8c0-19.34033028-15.29235352-34.63268378-34.63268378-34.6326829h-210.94452774c-9.44527763 0-17.0914544-7.64617676-17.09145351-17.0914544V79.0914544c0-9.44527763 7.64617676-17.0914544 17.09145351-17.0914544h277.06146943c38.23088467 0 69.26536758 31.03448291 69.26536758 69.26536758v276.61169356c0 9.44527763-7.64617676 17.0914544-17.0914544 17.09145439h-66.11694169c-9.44527763 0-17.0914544-7.64617676-17.0914544-17.0914544l-0.449775-210.94452773z m0 629.68515734v-210.94452774c0-9.44527763 7.64617676-17.0914544 17.0914544-17.09145351h66.11694169c9.44527763 0 17.0914544 7.64617676 17.0914544 17.09145351v277.06146943c0 38.23088467-31.03448291 69.26536758-69.26536758 69.26536758h-276.61169443c-9.44527763 0-17.0914544-7.64617676-17.09145351-17.0914544v-66.11694169c0-9.44527763 7.64617676-17.0914544 17.09145351-17.0914544H826.61769072c18.8905544-0.449775 34.63268378-16.1919044 34.63268379-35.08245878z m-698.95052402 0c0 18.8905544 15.74212852 34.63268378 34.63268291 34.63268378h210.94452774c9.44527763 0 17.0914544 7.64617676 17.09145439 17.0914544v66.11694169c0 9.44527763-7.64617676 17.0914544-17.09145439 17.0914544H131.26536758C93.03448291 961.550225 62 930.51574209 62 892.28485742v-276.61169443c0-9.44527763 7.64617676-17.0914544 17.0914544-17.09145351h66.11694169c9.44527763 0 17.0914544 7.64617676 17.0914544 17.09145351V826.61769072z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconApp012.defaultProps = {
  size: 18,
};

IconApp012 = React.memo ? React.memo(IconApp012) : IconApp012;

export default IconApp012;
