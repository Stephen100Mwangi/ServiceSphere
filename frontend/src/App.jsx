import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HeroPage from "./pages/HeroPage";
import PaymentDashboard from "./pages/PaymentDashboard";
import Dashboard from "./pages/Dashboard";
import Mpesa from "./pages/payments/Mpesa";
import Paypal from "./pages/payments/Paypal";
import Projects from "./pages/personal/Projects";
import PageNotFound from "./pages/404";
import Chat from "./pages/Chat";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const App = () => {
  const initialOptions = {
    clientId:
      "AWfaELWMEgIfdyBVtp18p8x2coXzykDVppgFlh78Bou0RbiKtnaplCtKL6b9urMm76GX6ixvZNfMCHCA",
    currency: "USD",
    intent: "capture",
  };
  <script
    src="https://www.paypal.com/sdk/js?client-id=AWfaELWMEgIfdyBVtp18p8x2coXzykDVppgFlh78Bou0RbiKtnaplCtKL6b9urMm76GX6ixvZNfMCHCA&currency=USD"
    data-sdk-integration-source="button-factory"
  ></script>;

  const user = JSON.parse(localStorage.getItem("serviceUser"));
  console.log(user);

  // const userFound = JSON.parse(user);

  return (
    <PayPalScriptProvider options={initialOptions}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/"
            element={user ? <HeroPage></HeroPage> : <Login></Login>}
          ></Route>
          <Route
            path="/payment"
            element={<PaymentDashboard></PaymentDashboard>}
          ></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/payment/mpesa" element={<Mpesa></Mpesa>}></Route>
          <Route path="/payment/paypal" element={<Paypal></Paypal>}></Route>
          <Route path="/personalPage" element={<Projects></Projects>}></Route>
          <Route path="/chat" element={<Chat></Chat>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </PayPalScriptProvider>
  );
};

export default App;
