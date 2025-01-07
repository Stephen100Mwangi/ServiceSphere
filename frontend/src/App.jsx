import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
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

  return (
    <PayPalScriptProvider options={initialOptions}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HeroPage></HeroPage>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <PaymentDashboard></PaymentDashboard>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard></Dashboard>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/payment/mpesa"
            element={
              <ProtectedRoute>
                <Mpesa></Mpesa>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/payment/paypal"
            element={
              <ProtectedRoute>
                <Paypal></Paypal>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/personalPage"
            element={
              <ProtectedRoute>
                <Projects></Projects>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chat></Chat>
              </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </PayPalScriptProvider>
  );
};

export default App;
