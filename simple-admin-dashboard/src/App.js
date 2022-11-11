// import Admin from "./AdminDashboard/Admin"
// import Header from "./Side-bar/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import DashBoard from "./AdminDashboard/DasbBody/DashBody";
import Upload from "./AdminDashboard/Upload/Upload";
import Delete from "./AdminDashboard/Delete/DeleteFile";


function App() {
  return (
    <>
      
     <Router>

      

       <Routes>

            <Route path='/' element={<DashBoard/>}/>
            <Route path='upload' element={<Upload/>}/>
            <Route path='delete' element={<Delete/>}/>
            

       </Routes>

    </Router> 
     
    </>
  );
}

export default App;
