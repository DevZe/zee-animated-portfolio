import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio"> Parallax</section>
      <section>Portfolio 1</section>
      <section>Portfolio 2</section>
      <section id="Contacts">Contact</section>
    </div>
  );
};

export default App;
