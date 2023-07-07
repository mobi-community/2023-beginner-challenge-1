import { Route, Routes } from "react-router-dom";
import "./App.css";
import Upside from "./components/upside";
import Down from "./components/down";
import Content from "./components/content";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Upside />}>
            <Route path="down/:id/" element={<Down />}>
              <Route path="up/:id2" element={<Content />}></Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
