import React from 'react';
import { Image } from './iconStyles';

export default function Icon({ src, pad, alt }) {
  return <Image src={src} alt={alt} pad={pad} />;
}
