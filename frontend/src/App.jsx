import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import HeroPage from "./pages/HeroPage"
import PaymentDashboard from "./pages/PaymentDashboard"
import Dashboard from "./pages/Dashboard"
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/hero" element={<HeroPage></HeroPage>}></Route>
      <Route path="/payment" element={<PaymentDashboard></PaymentDashboard>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
