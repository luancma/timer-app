import React from "react";
import { UserContext } from "../../providers/UserProvider";
import { useLunchReducer, TYPES } from "../../reducers/useLunchTimer";
export function Home() {
  const userStore = React.useContext(UserContext);

  const teste = useLunchReducer();
  const [timer, setTimer] = React.useState({
    seconds: 0,
    minuts: 0,
    hours: 0,
    miliseconds: 0
  });
  const [lunchTimer, setLunchTimer] = React.useState({
    seconds: 0,
    minuts: 0,
    hours: 0,
    miliseconds: 0
  });
  const [isCounting, setIsCounting] = React.useState(false);
  const [breackCounter, setBreackCounter] = React.useState(false);
  const handleToggleButton = () => setIsCounting((prev) => !prev);
  const handleBreack = () => {
    handleToggleButton();
    setBreackCounter(true);
  };
  React.useEffect(() => {
    if (teste.state.luncheSeconds === 60) {
      return teste.dispatch({
        type: TYPES.INCREMENT_LUNCH_MINUTS
      });
    }
    if (teste.state.luncheMinuts === 60) {
      return teste.dispatch({
        type: TYPES.INCREMENT_LUNCH_HOURS
      });
    }
    if (teste.state.startLunch) {
      setTimeout(() => {
        teste.dispatch({
          type: TYPES.INCREMENT_LUNCH_SECONDS
        });
      }, 10);
    }
  }, [teste.state.startLunch, teste, lunchTimer]);
  return (
    <div className="App">
      <p>
        Lunch time: {teste.state.luncheHours}:{teste.state.luncheMinuts}:
        {teste.state.luncheSeconds}
      </p>
      <p>
        Timer counter:{timer.hours}:{timer.minuts}:{timer.seconds}
      </p>
      <div>
        <button onClick={handleToggleButton}>
          {isCounting ? "Stop" : "Start"}
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
