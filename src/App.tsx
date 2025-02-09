import "./App.css";
import Header from "./components/Header";

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
    </>
  );
}

export default App;
