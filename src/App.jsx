import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./pages/main/index";
import GlobalStyles from './styles/GlobalStyles';
import Favorites from './pages/favorites/Favorites';
import Details from './pages/details/Details';

function App() {

  return (
    <>
    <GlobalStyles />
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/details/:id" element={<Details />} />
          Details
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
