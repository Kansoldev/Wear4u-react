import "./App.css";
import Header from "./components/Header";
import heroImage from "./assets/img/hero.jpg";

function App() {
  return (
    <>
      <div
        className="py-5 text-center font-medium bg-[#292929] text-[#efefef]"
        style={{
          letterSpacing: ".4px",
        }}
      >
        <p>Promo: Free shipping in every orders</p>
      </div>

      <Header />

      <section className="hero-area">
        <img
          src={heroImage}
          className="w-full object-cover"
          alt="Wear4u hero image"
        />
      </section>
    </>
  );
}

export default App;
