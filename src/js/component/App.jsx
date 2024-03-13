import React from "react";
import Card from "./MyCard";
import Jumbotron from "./MyJumbotron";
import Navbar from "./MyNavbar";
import Footer from "./footer";

const App = () => {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Card />
        <br></br><br></br>
        <Footer />
      </div>
    );
  }
  
  export default App;