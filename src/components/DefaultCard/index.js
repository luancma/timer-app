import React from 'react';
import { MdFreeBreakfast } from 'react-icons/md';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { TiArrowBack } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import {
  startBreakCounter,
  stopBreakCount,
} from '../../redux/slices/breaksSlice';
import { Timer } from '../Timer';
import { BreakTime } from '../BreakTime';
import { startCount, resetCount } from '../../redux/slices/normalWorkSlice';
import { Card } from './styles';

export const DefaultCard = ({ type }) => {
  const workTime = useSelector(state => state.workTime);
  const breaksSlice = useSelector(state => state.breaksSlice);
  const dispatch = useDispatch();
  const [componentState, setComponentState] = React.useState({
    background: '#fb743e',
  });
  const [cardProps, setCardProps] = React.useState({});

  React.useEffect(() => {
    if (type === 'work' && workTime.isPaused) {
      setComponentState('pause');
      setCardProps({
        type: 'pause',
        icon: <FaSignInAlt />,
        title: 'Começar turno',
        action: () => {
          dispatch(startCount());
        },
      });
    }
    if (type === 'work' && !workTime.isPaused) {
      setComponentState('start');
      setCardProps({
        type: 'start',
        icon: <FaSignOutAlt />,
        title: 'Finalizar turno',
        action: () => {
          dispatch(resetCount());
        },
      });
    }
    if (type === 'break' && breaksSlice.isPaused) {
      setComponentState('pause');
      setCardProps({
        type: 'pause',
        icon: <MdFreeBreakfast />,
        title: 'Iniciar pausa',
        action: () => {
          dispatch(startBreakCounter());
        },
      });
    }
    if (type === 'break' && !breaksSlice.isPaused) {
      setComponentState('start');
      setCardProps({
        type: 'start',
        icon: <TiArrowBack />,
        title: 'Finalizar pausa',
        action: () => {
          dispatch(stopBreakCount());
        },
      });
    }
  }, [type, workTime.isPaused, breaksSlice.isPaused]);

  return (
    <Card type={componentState} onClick={cardProps.action}>
      {type === 'break' ? <BreakTime /> : <Timer />}
      <span>{cardProps.title || 'Título'}</span>
      {cardProps.icon}
    </Card>
  );
};
