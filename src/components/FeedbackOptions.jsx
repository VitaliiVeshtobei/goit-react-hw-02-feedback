import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul>
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
              onLeaveFeedback();
            }}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              onLeaveFeedback();
            }}
          >
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};
