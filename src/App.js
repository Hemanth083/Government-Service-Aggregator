import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Pages/landingpage';
import Registration from './Pages/Registration';
import OTPpage from './Pages/OTPpage';
import CreatePassword from './Pages/CreatePassword'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="registration" element={<Registration />} />
          <Route path="registration/OTP" element={<OTPpage />} />
          <Route path="registration/OTP/CreatePassword" element={<CreatePassword />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
