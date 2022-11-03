import Admin from "./AdminDashboard/Admin"
import Header from "./Side-bar/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>

      <Header/>

       <Routes>
         <Route path='/'/>
       </Routes>

    </Router>
     
    </>
  );
}

export default App;
