import { createRoot } from "react-dom/client";
import AppV3 from "./v3/App.tsx";
import "./v3/styles/v3-theme.css";

createRoot(document.getElementById("root")!).render(<AppV3 />);
