import { Chart, registerables } from "chart.js";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

Chart.register(...registerables);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
