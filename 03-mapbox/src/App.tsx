import { PlacesProvider } from './context';
import './index.css';

function App() {

  return (
    <PlacesProvider>
      <h1>Hello world from provider</h1>
    </PlacesProvider>
  )
}

export default App
