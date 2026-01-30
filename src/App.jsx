import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import styles from "./App.module.css"; // ← import your background styles

function App() {
  return (
    <div className={styles.mainBackground}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
