import Navigation from "./components/Navigation";
import OldVideoInstances from "./components/old instances/OldVideoInstances";
import OldLinkInstances from "./components/old instances/OldLinkInstances";
import AddRemove from "./components/Changes/AddRemove";
import Reorder from "./components/Changes/Reorder";
import MainPage from "./components/MainPage";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/add-card" element={<AddRemove />} />
        <Route path="/reorder" element={<Reorder />} />
        <Route path="/old/video" element={<OldVideoInstances />} />
        <Route path="/old/link" element={<OldLinkInstances />} />
      </Routes>
    </Router>
  );
}

export default App;
