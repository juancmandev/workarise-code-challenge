import { Routes, Route } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Development from '../pages/Development';
import Design from '../pages/Design';
import Marketing from '../pages/Marketing';
import '../styles/global.css';

const App = () => {
  return (
    <Main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/development' element={<Development />} />
        <Route path='/design' element={<Design />} />
        <Route path='/marketing' element={<Marketing />} />
      </Routes>
    </Main>
  );
};

export default App;
