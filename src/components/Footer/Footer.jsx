import React from "react";

function Footer() {
  return (
    <footer
      style={{ textAlign: "center", padding: "20px 0", marginTop: "40px" }}
    >
      <p>© {new Date().getFullYear()} Ahmed — All rights reserved.</p>
    </footer>
  );
}

export default Footer;
