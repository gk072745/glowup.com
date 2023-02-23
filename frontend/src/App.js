import './App.css';
import {Route,Routes} from "react-router-dom"
import AllPages from "./Pages/AllPages/AllPages"

function App() {
  return (
    <div className="App">
        <Routes >
          <Route path='products/:category' element={<AllPages />} />
        </Routes>
    </div>
  );
}

export default App;
