import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/user';
import { DefaultCard } from '../../components/DefaultCard';
import { Header } from '../../components/Header';
import { CardsContent } from './styles';
import { incrementSeconds } from '../../redux/slices/normalWorkSlice';
import { incrementBreakSeconds } from '../../redux/slices/breaksSlice';

export function Home() {
  const dispatch = useDispatch();
  const workTime = useSelector(state => state.workTime);
  const breaksSlice = useSelector(state => state.breaksSlice);

  const incrementWorkTime = React.useCallback(() => {
    setTimeout(() => {
      dispatch(incrementSeconds());
    }, 1000);
  }, [dispatch]);

  const incrementBreakTime = React.useCallback(() => {
    setTimeout(() => {
      dispatch(incrementBreakSeconds());
    }, 1000);
  }, [dispatch]);

  React.useEffect(() => {
    if (!workTime.isPaused) {
      incrementWorkTime();
    }
  }, [workTime.isPaused, workTime.seconds, incrementWorkTime]);

  React.useEffect(() => {
    if (!breaksSlice.isPaused) {
      incrementBreakTime();
    }
  }, [breaksSlice.isPaused, breaksSlice.seconds, incrementBreakTime]);

  return (
    <div>
      <Header />
      <CardsContent>
        <DefaultCard type="work" />
        <DefaultCard type="break" />
      </CardsContent>
    </div>
  );
}
