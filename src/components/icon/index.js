import React from 'react';
import { Image } from './iconStyles';

export default function Icon({ width = 24, height = 24, ...otherProps }) {
  return <Image width={width} height={height} {...otherProps} />;
}
