import React from "react";
import Image from "next/image";
import logo from "../images/logo.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Apply the logo image to the header */}
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
      <nav>
        <a href="/about"> About |</a>
        <a href="/videos"> Videos |</a>
        <a href="/store" className="store"> Store </a>
      </nav>
    </header>
  );
};

export default Header;

