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
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
             <Route path="/" element={<Main></Main>}></Route>
             <Route path="/register" element={<Register></Register>} />
             <Route path="/user/login" element={<Login></Login>} />
             <Route path="/job/:jobId" element={<JobDetails></JobDetails>}></Route>
             <Route path="/employer/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
