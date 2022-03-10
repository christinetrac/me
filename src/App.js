import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Home from "./Containers/Home/Home";
import Acnh from "./Containers/Projects/Acnh";
import Friendle from "./Containers/Projects/Friendle";
import Market from "./Containers/Projects/Market";
import Glean from "./Containers/Projects/Glean";
import Kitty from "./Containers/Projects/Kitty";
import Dimension from "./Containers/Projects/Dimension";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 520 })

  return (
    <Routes>
      <Route exact path='/' element={<Home isMobile={isMobile}/>} />
      <Route exact path='/acnh' element={<Acnh isMobile={isMobile}/>} />
      <Route exact path='/friendle' element={<Friendle isMobile={isMobile}/>} />
      <Route exact path='/aftrmarkt' element={<Market isMobile={isMobile}/>} />
      <Route exact path='/glean' element={<Glean isMobile={isMobile}/>} />
      <Route exact path='/kashkitty' element={<Kitty isMobile={isMobile}/>} />
      <Route exact path='/dimension' element={<Dimension isMobile={isMobile}/>} />
    </Routes>
  );
}

export default App;
