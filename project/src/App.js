import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Test from "./Test";
import Result from "./Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />}></Route>
        <Route path="/result/*" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
