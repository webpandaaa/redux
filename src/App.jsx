import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './store/reducers/counterSlice';


const App = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counterReducer.value);
  // console.log(state);

  const incrementHandler = () =>{
    dispatch(increment(value + 1));
  }

  const DecrementHandler = () =>{
    dispatch(increment(value - 1));
  }

  return (
    <div className='p-5'>
      <h1 className='mt-10 m-auto text-5xl '>{value}</h1>
      <div className='mt-5'>
      <button onClick={incrementHandler} className='px-5 py-2 bg-orange-500 rounded'>increment</button> <br />
      <button onClick={DecrementHandler} className='px-5 py-2 mt-5 bg-orange-500 rounded'>Decrement</button>
      </div>
    </div>
  )
}

export default App
