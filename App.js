import './App.css';
import FavColor from './FavColor';
import Cars from './Cars';

function App() {
  return (
    <div className="App">
      <div className="wrap1">
        <FavColor/>
        <br/>
      </div>
      <div className="wrap1">
        <Cars/>
        <br/>
        <p>***Year, Model, Make and Color are useState***</p>
      </div>
    </div>
  );
}

export default App;
