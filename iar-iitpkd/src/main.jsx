import ReactDOM from "react-dom/client";
import "./index.css";
import {Routes, Route} from "react-router-dom";

// Importing components
import NavbarGlobal from "./components/global/NavbarGlobal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Routes>
    <Route path="/" element={<NavbarGlobal />} />
  </Routes>
);
