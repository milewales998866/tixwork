/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconApp32 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M456.139761 884.781238l0 27.638477c0 10.012028-0.005117 20.025079-0.005117 30.026874-50.15633 11.235902-100.518345 22.508643-150.889569 33.800827l-56.438407-84.271312c0.080841-18.73469 0.085958-37.46938 0.115634-56.19486l-49.740868-72.788793c-0.053212 18.180058-0.096191 36.361139-0.147356 54.521754-17.087167-25.507954-33.805944-50.528813-50.199309-75.013461 0.071631-17.61724 0.166799-35.224246 0.233314-52.841485l-44.442188-65.032132c-0.091074 17.111726-0.171915 34.231639-0.26299 51.341319-15.290241-22.823821-30.284747-45.236274-44.958958-67.218938 0.25378-37.487799 0.315178-74.967412 0.315178-112.436792l89.765443-16.10684c91.609441 115.808586 183.089945 231.68471 274.517237 347.636558l93.043093-20.606317c-98.937336-113.315812-197.960631-226.545666-297.116955-339.659887 29.324886-5.263887 58.476833-10.488889 87.520309-15.696494 108.280122 109.87648 216.479403 219.828684 324.592726 329.886289l88.943728-19.698644c-115.072829-107.554598-230.232638-215.013005-345.45794-322.405921 28.336372-5.072529 56.614415-10.146081 84.664262-15.179724 123.718743 104.286158 247.279896 208.745255 370.846166 313.205375l85.212754-18.86772c-129.990586-102.128005-260.010849-204.198705-390.116045-306.174238 27.562752-4.939499 54.847166-9.840112 82.136695-14.732539l415.509389 297.079092c0 40.10644 0.005117 80.222089-0.01842 120.318296-47.853891 10.719132-95.852068 21.466917-143.987369 32.252565 0.005117-18.877953 0.010233-37.746696 0.014326-56.624648l-136.526443 30.246885c0 18.984377-0.005117 37.966707-0.010233 56.949037-48.928363 10.957563-98.077759 21.963221-147.368372 33.008788 0.010233-19.108197 0.010233-38.205137 0.010233-57.32152L456.139761 884.781238 456.139761 884.781238z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M282.427394 47.752584 94.278223 47.752584l0 179.989327-94.059236 0.076748 188.138938 229.009787 188.138938-229.324966-94.069469 0.085958C282.427394 171.318854 282.427394 104.023168 282.427394 47.752584L282.427394 47.752584z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconApp32.defaultProps = {
  size: 18,
};

IconApp32 = React.memo ? React.memo(IconApp32) : IconApp32;

export default IconApp32;
