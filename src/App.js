import VideoInstance from "./components/instances/VideoInstance";
import LinkInstance from "./components/instances/LinkInstance";
import Navigation from "./components/Navigation";
import OldVideoInstances from "./components/old instances/OldVideoInstances";
import OldLinkInstances from "./components/old instances/OldLinkInstances";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/endash" element={<Navigation />} />
          <Route path="/video" element={<VideoInstance />} />
          <Route path="/link" element={<LinkInstance />} />
          <Route path="/old/video" element={<OldVideoInstances />} />
          <Route path="/old/link" element={<OldLinkInstances />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
