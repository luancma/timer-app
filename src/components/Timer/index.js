import React from 'react';
import { useSelector } from 'react-redux';
import { formatTime } from '../../utils/formatTime';
import { Content } from './styles';

export const Timer = () => {
  const workTime = useSelector(state => state.workTime);

  return <Content>{formatTime(workTime.seconds)}</Content>;
};
