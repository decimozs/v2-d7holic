import React from "react";
import { Header, About, Contact, Footer, Resume } from "../shared";

const Home: React.FunctionComponent = () => {
  return (
    <section className="antialiased text-default font-medium">
      <Header />
      <About />
      <div className="md:fixed bottom-16 lg:right-3">
        <Contact />
        <Footer />
      </div>
      <Resume />
    </section>
  );
};

export default Home;
