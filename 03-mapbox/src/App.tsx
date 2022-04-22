import { MapProvider, PlacesProvider } from './context';
import { HomePage } from './pages/HomePage';
import './index.css';

function App() {

  return (
    <PlacesProvider>
      <MapProvider>
        <HomePage />
      </MapProvider>
    </PlacesProvider>
  )
}

export default App
