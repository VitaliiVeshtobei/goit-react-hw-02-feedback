import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList } from './FeedbackOptionsStyled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ButtonList>
        {options.map((option, idx) => {
          return (
            <li key={idx}>
              <button
                type="button"
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                Good
              </button>
            </li>
          );
        })}
      </ButtonList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
