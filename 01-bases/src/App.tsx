import './App.css'
import { Counter } from './bases/Counter'
import { CounterBy } from './bases/CounterBy'
import { CounterEffect } from './bases/CounterEffect'
import { CounterHook } from './bases/CounterHook'
import { CounterReducer } from './reducer-counter/CounterReducer'
// import { CounterReducer } from './bases/CounterReducer'

function App() {
  return (
    <div className="App">
        <Counter/>
        <hr/>
        {/* <CounterBy/> */}
        <hr/>
        {/* <CounterEffect/> */}
        {/* <CounterHook/> */}
        <CounterReducer/>
    </div>
  )
}

export default App
