import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList } from './FeedbackOptionsStyled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ButtonList>
        <li>
          <button
            type="button"
            onClick={() => {
              onLeaveFeedback(options[0]);
            }}
          >
            Good
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              onLeaveFeedback(options[1]);
            }}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              onLeaveFeedback(options[2]);
            }}
          >
            Bad
          </button>
        </li>
      </ButtonList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
