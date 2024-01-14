import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
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
