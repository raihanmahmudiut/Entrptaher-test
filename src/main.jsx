import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Overlay from "./overlay.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Overlay />
		<App />
	</React.StrictMode>
);
