// Burger.js
import React from 'react';
import { StyledLazy } from './LazyShop.styled';
import { bool, func } from 'prop-types';

const LazyShop = ({ open, setOpen }) => {
  return (
    <StyledLazy open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledLazy>
  )
}
LazyShop.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default LazyShop;