import * as React from 'react';

import { Text, TextProps } from './Themed';

/* eslint import/prefer-default-export: "off" */
/* eslint react/destructuring-assignment: "off" */
export function MonoText(props: TextProps): JSX.Element {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}
