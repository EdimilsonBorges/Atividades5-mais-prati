import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/main/index";
import GlobalStyles from './styles/GlobalStyles';

function App() {

  return (
    <>
    <GlobalStyles />
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
