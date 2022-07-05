import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (

   <div className="App">
    <h1>Redux App</h1>
    <h3>Counter = {counter}</h3>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
    {isLogged ?<h3>Valuable Information I should't see if not logged in</h3>: <h3>Nope</h3>}
    
   </div>
  );
}

export default App;
