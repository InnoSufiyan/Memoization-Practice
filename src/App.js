import logo from './logo.svg';
import './App.css';
import { memo, useCallback, useMemo, useState } from 'react';

function App() {
  console.log("app peda huwa")
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(0)
  const [state3, setState3] = useState(32)

  const obj = useMemo(() => {
    return {
      name: "sufiyan",
      age: state3
    }
  }, [state3])

  const addCounterHandler = useCallback(() => {
    return function addCounterHandler() {
      console.log("main chal gaya")
    }
  }, [])

  return (
    <>
      {state1}
      <button onClick={() => setState1(state1 + 1)}>
        change state 1
      </button>
      <button onClick={() => setState2(state2 + 1)}>
        change state 2
      </button>
      <button onClick={() => setState3(state3 + 1)}>
        change state 3
      </button>
      <Comp1 prop1={state2} prop2={obj} addCounter={addCounterHandler} />
    </>
  );
}

export default App;


const Comp1 = memo(function Comp1({ prop1, prop2, addCounterHandler }) {
  console.log("component 1 peda huwa")
  console.log(prop2)
  return (
    <>
      <h1>
        {prop2.name} with age {prop2.age}
      </h1>
      <h1>
        {prop1}
      </h1>
      <h1>Yeh hai mera Component 1</h1>
    </>
  )
})