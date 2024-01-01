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
import EmployerLogin from "./feature/auth/EmployerLogin";
import EmployerRegister from "./feature/auth/EmployerRegister";
import CreateJob from "./feature/jobs/CreateJob";
import { useEffect, useState } from "react";
import Preloader from "./components/loader/Preloader";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  })
  return (
    <div>
      {loading ? <div>
        <Preloader />
      </div> :<div className="App">
      <Router>
        <Routes>
             <Route path="/" element={<Main></Main>}></Route>
             <Route path="/user/register" element={<Register></Register>} />
             <Route path="/user/login" element={<Login></Login>} />
             <Route path="/my/profile" element={<EditProfile></EditProfile>} />
             <Route path="/job/:jobId" element={<JobDetails></JobDetails>}></Route>
             <Route path="/employer/dashboard" element={<Dashboard></Dashboard>}></Route>
             <Route path="/employer/login" element={<EmployerLogin></EmployerLogin>}></Route>
             <Route path="/employer/registration" element={<EmployerRegister></EmployerRegister>}></Route>
             <Route path="/create/job" element={<CreateJob></CreateJob>}></Route>
        </Routes>
      </Router>
    </div>}
    </div>
    
  );
}

export default App;
