// import Admin from "./AdminDashboard/Admin"
// import Header from "./Side-bar/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Sidebar1 from "./AdminDashboard/Sidebar/Sidebar1";
import AdminBody from "./AdminDashboard/DasbBody/DashBody";
import Upload from "./AdminDashboard/Upload/Upload";
import Delete from "./AdminDashboard/Delete/DeleteFile";


function App() {
  return (
    <>
      <Delete/>
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
