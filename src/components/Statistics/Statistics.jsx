import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsTitle, StatisticsList } from './StatisticsStyled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsList>
        <li>
          <span>Good: {good}</span>
        </li>
        <li>
          <span>Neutral: {neutral}</span>
        </li>
        <li>
          <span>Bad: {bad}</span>
        </li>
        <li>
          <span>Total: {total}</span>
        </li>
        <li>
          <span>Positive feedback: {positivePercentage}%</span>
        </li>
      </StatisticsList>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
