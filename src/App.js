import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { actions } from './store/index';

function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  }
  const decrement = () => {
    dispatch(actions.decrement());
  }
  const rand = () => {
    dispatch(actions.rand(Math.floor(Math.random()*10)));
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <button onClick={increment}>+</button><h2>{counter}</h2><button onClick={decrement}>-</button>
      <button onClick={rand}>Add Random</button>
    </div>
  );
}

export default App;
