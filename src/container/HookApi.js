import React, { useState, useEffect, useContext, createContext, useReducer, useRef, useImperativeHandle, forwardRef } from 'react';
import {Button } from 'antd'

const context = createContext()

function Sub() {
  const value = useContext(context)
  console.log(value.count)
  return null

}
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}
const initialState = {
  count: 0
}
function FancyInput(props, ref) {
  const inputRef = useRef()
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current.focus()
      }
    }))
    return <input ref={inputRef}/>
}
FancyInput = forwardRef(FancyInput)

function App() {
  // const [count, setCount ] = useState(0)
  const [{count}, dispatch] = useReducer(reducer, initialState)
  const refSub = useRef(null)
  const inputEl = useRef(null)
  
  useEffect(() => {
    console.log(count)
    return () => {
      // 卸载
      console.log('unmount')
    }
  }, [count])
  const onButtonClick = () => {
    inputEl.current.focus()
  }

  return (
    <div className="App">
      <p>{count}</p>
      {/* <Button onClick={() => setCount(count + 1)}>点击增加1</Button> */}
      <Button onClick={() => dispatch({type: 'INCREASE'})}>增加1</Button>
      <Button onClick={() => dispatch({type: 'DECREMENT'})}>减少1</Button>
      <Button onClick={onButtonClick}>聚焦</Button>
      <FancyInput ref={inputEl}></FancyInput>
      <context.Provider value={{count}}>
        <Sub ref={refSub}></Sub>
      </context.Provider>
    </div>
  );
}

export default App;
