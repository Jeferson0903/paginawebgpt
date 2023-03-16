
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Home2 from './components/Home2'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
    <div>
      <Header/>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home2" element={<Home2/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
