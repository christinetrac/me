import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Home from "./Containers/Home/Home";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 520 })

  return (
    <Routes>
      <Route exact path='/' element={<Home isMobile={isMobile}/>} />
    </Routes>
  );
}

export default App;
