import ContactPage from "./components/ContactPage";
import TotalApp from "./TotalApp"
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


function App() {

  return (
    <>

      <BrowserRouter>


        <Routes>
          <Route path="/" element={<TotalApp />} />

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

      {/* <TotalApp /> */}

    </>
  )
}

export default App
