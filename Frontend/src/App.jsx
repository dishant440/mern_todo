import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Signup, Signin, Dashboard } from "./Pages/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
