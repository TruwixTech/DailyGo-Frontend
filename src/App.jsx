import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Termscondition from './pages/Termscondition';
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/contactus" element={<Contactus />} />
       <Route path="/termscondition" element={<Termscondition/>} />
       <Route path="/gallery" element={<Gallery/>} />
      </Routes>

    </Router>
  );
};
// // const root = createRoot(document.getElementById('root'));
// // root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

export default App;

