import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./Page";
import SignIn from "./SignIn";
import Dashboard from "./DashBoard";
function App() {
  return (
    <Router basename="/neatskill_clone">
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
