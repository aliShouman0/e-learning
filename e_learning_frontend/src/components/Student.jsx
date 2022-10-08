import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Card from "./Course";

function Student() {
  return (
    <>
      <Header />
      <Card is_std={true} />
      <Footer />
    </>
  );
}

export default Student;
