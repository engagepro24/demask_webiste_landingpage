import ContactPage from "./components/ContactPage";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import TotalApp from "./TotalApp"
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


function App() {

  return (
    <>

      <BrowserRouter>


        <Routes>
          <Route path="/" element={<TotalApp />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<Terms />} />
          <Route path="/term" element={<Privacy />} />
        </Routes>
      </BrowserRouter>

      {/* <TotalApp /> */}

    </>
  )
}

export default App
