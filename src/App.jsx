import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {

  return (
    <>
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
