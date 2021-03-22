/* eslint-disable prefer-template */
import React from 'react';
import { useSelector } from 'react-redux';
import { formatTime } from '../../utils/formatTime';
import { Content } from '../Timer/styles';

export const BreakTime = () => {
  const breaksSlice = useSelector(state => state.breaksSlice);

  return (
    <Content>
      {breaksSlice.isPaused ? '00:00' : formatTime(breaksSlice.seconds || 0)}
    </Content>
  );
};
