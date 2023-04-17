import ReactDOM from "react-dom/client";
import { DataContextProvider } from "./store/data-context";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
);
