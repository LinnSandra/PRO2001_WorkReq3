import { Routes, Route } from "react-router-dom";
import Gallery from "./gallery";
import Detail from "./detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/series/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;