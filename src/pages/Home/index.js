import React from 'react';
import { useLunchReducer, TYPES } from '../../reducers/useLunchTimer';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/user';

export function Home() {
  const dispatch = useDispatch();
  const teste = useLunchReducer();
  const [timer, setTimer] = React.useState({
    seconds: 0,
    minuts: 0,
    hours: 0,
    miliseconds: 0,
  });
  const [lunchTimer, setLunchTimer] = React.useState({
    seconds: 0,
    minuts: 0,
    hours: 0,
    miliseconds: 0,
  });
  const [isCounting, setIsCounting] = React.useState(false);
  const [breackCounter, setBreackCounter] = React.useState(false);
  const handleToggleButton = () => setIsCounting(prev => !prev);
  const handleBreack = () => {
    handleToggleButton();
    setBreackCounter(true);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  React.useEffect(() => {
    if (teste.state.luncheSeconds === 60) {
      return teste.dispatch({
        type: TYPES.INCREMENT_LUNCH_MINUTS,
      });
    }
    if (teste.state.luncheMinuts === 60) {
      return teste.dispatch({
        type: TYPES.INCREMENT_LUNCH_HOURS,
      });
    }
    if (teste.state.startLunch) {
      setTimeout(() => {
        teste.dispatch({
          type: TYPES.INCREMENT_LUNCH_SECONDS,
        });
      }, 10);
    }

    return undefined;
  }, [teste.state.startLunch, teste, lunchTimer]);

  return (
    <div className="App">
      <button onClick={handleLogout}>Logout</button>
      <p>
        Lunch time: {teste.state.luncheHours}:{teste.state.luncheMinuts}:
        {teste.state.luncheSeconds}
      </p>
      <p>
        Timer counter:{timer.hours}:{timer.minuts}:{timer.seconds}
      </p>
      <div>
        <button onClick={handleToggleButton}>
          {isCounting ? 'Stop' : 'Start'}
        </button>
      </div>
      <div>
        <button
          onClick={
            teste.state.startLunch
              ? () => teste.stopLunchAction()
              : () => teste.startLunchAction()
          }
        >
          Lunch Timer
        </button>
      </div>
    </div>
  );
}
