import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./pages/main/index";
import GlobalStyles from './styles/GlobalStyles';
import Favorites from './pages/favorites/Favorites';
import Details from './pages/details/Details';
import PageNotFound from './pages/pagenotfound/PageNotFound';

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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
