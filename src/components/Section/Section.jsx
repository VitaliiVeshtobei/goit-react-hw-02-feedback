import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer } from './SectionStyled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <h1>{title}</h1>
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};
