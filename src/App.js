import "./styles.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import JobBoard from "./JobBoard";
import JobDetail from "./JobDetail";
import JOBS from "./jobs";

function App() {
  const [allJobs, setAllJobs] = useState(JOBS);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/jobs" element={<JobBoard />} />
        <Route path="/job/:id" element={<JobDetail />} />
      </Routes>
    </div>
  );
}

export default App;
