
import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route, Navigate } from "react-router-dom"
import JobsList from './Components/Jobs/JobsList';
import JobDetails from './Components/JobDetails/JobDetails';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/jobs" />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/jobs/:jobId" element={<JobDetails />} />
      </Routes>
    </div>
  );
}

export default App;
