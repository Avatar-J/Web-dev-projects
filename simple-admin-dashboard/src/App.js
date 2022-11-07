// import Admin from "./AdminDashboard/Admin"
// import Header from "./Side-bar/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Sidebar1 from "./Side-bar/Sidebar1";
import AdminBody from "./Side-bar/AdminBody";


function App() {
  return (
    <>
      <AdminBody/>
    {/* <Router>

      <AdminBody/>

       <Routes>
         <Route path='/'/>
       </Routes>

    </Router>  */}
     
    </>
  );
}

export default App;
