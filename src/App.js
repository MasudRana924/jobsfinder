import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import './App.css';
import Login from './feature/auth/Login';
import Register from './feature/auth/Register';
import JobDetails from "./feature/jobs/JobDetails";
import Main from "./feature/main/Main";
import Dashboard from "./feature/user/Dashboard";
import EditProfile from "./feature/user/EditProfile";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
             <Route path="/" element={<Main></Main>}></Route>
             <Route path="/user/register" element={<Register></Register>} />
             <Route path="/user/login" element={<Login></Login>} />
             <Route path="/my/profile" element={<EditProfile></EditProfile>} />
             <Route path="/job/:jobId" element={<JobDetails></JobDetails>}></Route>
             <Route path="/employer/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
