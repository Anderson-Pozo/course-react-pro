import './App.css'
import { Counter } from './bases/Counter'
import { CounterBy } from './bases/CounterBy'
import { CounterEffect } from './bases/CounterEffect'
import { CounterHook } from './bases/CounterHook'

function App() {
  return (
    <div className="App">
        <Counter/>
        <hr/>
        {/* <CounterBy/> */}
        <hr/>
        {/* <CounterEffect/> */}
        <CounterHook/>
    </div>
  )
}

export default App
