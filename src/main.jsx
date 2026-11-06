import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import "./index.css";
import "./pages/components/HeaderFooter.css";



ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <Header />
    <main className="page-content">
      <App />
    </main>
    <Footer />
  </React.StrictMode>
);