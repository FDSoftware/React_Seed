import React , { FC } from 'react';
import { IFooter } from './types'

const Footer : FC< IFooter > = ({ props = undefined } )=> {
  return (
    <>
      Footer {props}
    </>
  );
};

export default Footer;