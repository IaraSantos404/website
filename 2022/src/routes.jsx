import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/home"
import Palestrantes from "./pages/palestrantes/palestrantes"

export default function AppRoutes(){
  return(
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/palestrantes" element={<Palestrantes />} />
      </Routes>
    </BrowserRouter>
  )
}