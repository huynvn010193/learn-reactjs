import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import styles from './styles.module.css';
CounterFeature.propTypes = {};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const handleIncreaseClick = () => {
    const action = increase(); // action creator
    dispatch(action);
  };
  const handleDecreaseClick = () => {
    const action = decrease(); // action creator
    dispatch(action);
  };
  return (
    <div className={styles.counter}>
      Conter: {counter}
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <br />
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
