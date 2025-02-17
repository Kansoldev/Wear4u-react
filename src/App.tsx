import "./App.css";
import Header from "./components/Header";
import heroImage from "./assets/img/hero.jpg";
import arrivals from "./assets/img/arrivals.jpg";

function App() {
  const products = [
    {
      id: 1,
      name: "Leather Biker Jacket",
      img: "/product-1.png",
      price: 128,
    },
    {
      id: 2,
      name: "Luxury hoodie",
      img: "/product-2.png",
      price: 500,
    },
    {
      id: 3,
      name: "Brown sweater",
      img: "/product-3.png",
      price: 126,
    },
    {
      id: 4,
      name: "Sweat pants",
      img: "/product-4.png",
      price: 100,
    },
  ];

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

      <section className="w-[1200px] max-w-full mx-auto mt-14">
        <h2
          className="text-center uppercase text-5xl sm:text-7xl lg:text-8xl xl:text-[150px] tracking-[-4px] font-normal"
          style={{
            fontFamily: "helvetica",
          }}
        >
          New Arrivals
        </h2>

        <div className="product__grid">
          <div
            className="p-4 border border-solid border-[#bdbdbd] hidden xl:block"
            style={{ gridArea: "bg-1" }}
          >
            <img className="collection_image" src={arrivals} alt="" />
          </div>

          {products.map((product) => (
            <div key={product.id} className="product text-center xl:text-left">
              <div className="love-icon right-5">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="transparent"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.62 20.9641C12.28 21.0841 11.72 21.0841 11.38 20.9641C8.48 19.9741 2 15.8442 2 8.84415C2 5.75415 4.49 3.25415 7.56 3.25415C9.38 3.25415 10.99 4.13415 12 5.49415C13.01 4.13415 14.63 3.25415 16.44 3.25415C19.51 3.25415 22 5.75415 22 8.84415C22 15.8442 15.52 19.9741 12.62 20.9641Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="product-image xl:mt-10">
                <img
                  src={product.img}
                  className="mx-auto xl:mx-0 xl:mb-8"
                  alt=""
                />
              </div>

              <div className="product-desc">
                <h3 className="font-medium uppercase">{product.name}</h3>

                <div className="flex justify-between gap-1 mx-auto xl:mx-0 w-max my-2">
                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    S
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    M
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    L
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    XL
                  </span>
                </div>

                <p className="font-bold text-2xl">${product.price}</p>
              </div>

              <div className="add-to-cart-icon bottom-5">
                <a href={"#"}>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 8H21"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-[1200px] max-w-full mx-auto mt-20">
        <h2
          className="text-center uppercase text-5xl sm:text-7xl lg:text-8xl xl:text-[150px] tracking-[-4px] font-normal"
          style={{
            fontFamily: "helvetica",
          }}
        >
          Best Sellers
        </h2>

        <div className="grid justify-between gap-5 grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 p-[25px] sm:p-[13px] xl:mb-3">
          {products.map((product) => (
            <div key={product.id} className="product text-center xl:text-left">
              <div className="love-icon right-5">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="transparent"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.62 20.9641C12.28 21.0841 11.72 21.0841 11.38 20.9641C8.48 19.9741 2 15.8442 2 8.84415C2 5.75415 4.49 3.25415 7.56 3.25415C9.38 3.25415 10.99 4.13415 12 5.49415C13.01 4.13415 14.63 3.25415 16.44 3.25415C19.51 3.25415 22 5.75415 22 8.84415C22 15.8442 15.52 19.9741 12.62 20.9641Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="product-image xl:mt-10">
                <img
                  src={product.img}
                  className="mx-auto xl:mx-0 xl:mb-8"
                  alt=""
                />
              </div>

              <div className="product-desc">
                <h3 className="font-medium uppercase">{product.name}</h3>

                <div className="flex justify-between gap-1 mx-auto xl:mx-0 w-max my-2">
                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    S
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    M
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    L
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    XL
                  </span>
                </div>

                <p className="font-bold text-2xl">${product.price}</p>
              </div>

              <div className="add-to-cart-icon bottom-5">
                <a href={"#"}>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 8H21"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shipping-banner">
        <span
          className="block w-52 p-[0.625rem] text-center rounded-[200px] text-[20px]"
          style={{
            backgroundColor: "rgba(247, 245, 233, 1)",
            color: "rgba(41, 41, 41, 1)",
          }}
        >
          Just launched
        </span>

        <h2 className="text-3xl sm:text-6xl lg:text-8xl xl:text-[140px] leading-snug sm:leading-none py-16">
          Free Express Shipping
        </h2>

        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 xl:gap-12 p-5 xl:p-[0.625rem]"
          style={{ backgroundColor: "rgba(113, 85, 63, 0.5)" }}
        >
          <p>
            Join us and get free express shipping on any orders over $100, and
            free global shipping on orders over $200 shop
          </p>

          <button>Shop</button>
        </div>
      </section>

      <section className="w-[1200px] max-w-full mx-auto mt-14">
        <span
          className="text-[#a74107] text-4xl block tracking-[-4px] text-center"
          style={{ fontFamily: "Helvetica" }}
        >
          men
        </span>

        <h2
          className="text-center uppercase text-5xl sm:text-7xl lg:text-8xl xl:text-[166px] tracking-[-4px] font-normal"
          style={{
            fontFamily: "helvetica",
          }}
        >
          Collection
        </h2>

        <div className="product__grid grid2">
          <div
            className="p-4 border border-solid border-[#bdbdbd] hidden xl:block"
            style={{ gridArea: "bg-1" }}
          >
            <img className="collection_image" src="/men.jpg" alt="" />
          </div>

          {products.map((product) => (
            <div key={product.id} className="product text-center xl:text-left">
              <div className="love-icon right-5">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="transparent"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.62 20.9641C12.28 21.0841 11.72 21.0841 11.38 20.9641C8.48 19.9741 2 15.8442 2 8.84415C2 5.75415 4.49 3.25415 7.56 3.25415C9.38 3.25415 10.99 4.13415 12 5.49415C13.01 4.13415 14.63 3.25415 16.44 3.25415C19.51 3.25415 22 5.75415 22 8.84415C22 15.8442 15.52 19.9741 12.62 20.9641Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="product-image xl:mt-10">
                <img
                  src={product.img}
                  className="mx-auto xl:mx-0 xl:mb-8"
                  alt=""
                />
              </div>

              <div className="product-desc">
                <h3 className="font-medium uppercase">{product.name}</h3>

                <div className="flex justify-between gap-1 mx-auto xl:mx-0 w-max my-2">
                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    S
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    M
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    L
                  </span>

                  <span className="px-2 p-[1px] border border-solid border-[#00000033]">
                    XL
                  </span>
                </div>

                <p className="font-bold text-2xl">${product.price}</p>
              </div>

              <div className="add-to-cart-icon bottom-5">
                <a href={"#"}>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 8H21"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
