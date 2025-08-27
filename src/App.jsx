import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";

// App.jsx acts as the root route configuration
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
