import {
  BrowserRouter as Router,
} from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Sidebar from "./AdminDashboard/NewSidebar/Sidebar"

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <ProtectedRoutes />
        </Router>
      </AuthProvider>

      {/* <Sidebar/> */}

    </>
  );
}

export default App;
