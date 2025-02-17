const Footer = () => {
  return (
    <footer className="bg-[#d5c8b61a] border border-solid border-[#0003] text-[#2f2f2f] w-[1177px] max-w-full mx-auto mt-12">
      <ul className="md:flex justify-between gap-10 p-7">
        <li>
          <h2 className="font-bold text-lg mb-4 uppercase">Company</h2>

          <ul>
            <li>
              <a href="#" className="text-base">
                About us
              </a>
            </li>

            <li className="my-2">
              <a href="#" className="text-base">
                FAQ
              </a>
            </li>

            <li>
              <a href="#" className="text-base">
                Contact us
              </a>
            </li>
          </ul>
        </li>

        <li className="mt-5 md:mt-0">
          <h2 className="font-bold text-lg mb-2 mb:mb-4 uppercase">Shop</h2>

          <ul>
            <li>
              <a href="#" className="text-base">
                How to order
              </a>
            </li>

            <li className="my-2">
              <a href="#" className="text-base">
                Track your order
              </a>
            </li>

            <li>
              <a href="#" className="text-base">
                Return & Exchanges
              </a>
            </li>
          </ul>
        </li>

        <li className="mt-5 md:mt-0">
          <h2 className="font-bold text-lg mb-2 mb:mb-4 uppercase">
            Social media
          </h2>

          <ul>
            <li className="mb-2">
              <a href="#" className="text-base">
                Github
              </a>
            </li>

            <li className="mb-2">
              <a href="#" className="text-base">
                LinkedIn
              </a>
            </li>

            <li>
              <a href="#" className="text-base">
                Twitter
              </a>
            </li>
          </ul>
        </li>

        <li className="mt-5 md:mt-0">
          <h2 className="font-bold text-lg mb-2 mb:mb-4 uppercase">
            Newsletter
          </h2>

          <p className="leading-tight">
            Sign up for our Newsletter and Receive $10 off your First Order
          </p>

          <form className="border-b border-b-[#27262533] flex items-center justify-between relative w-full max-w-[400px]">
            <input
              type="text"
              className="pt-4 border-0 bg-transparent rounded-none w-full text-[1.05rem] font-semibold mb-2"
              placeholder="Your Email"
            />

            <button className="bg-transparent border-0 cursor-pointer h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="m-2 text-[#00000080]"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
              </svg>
            </button>
          </form>
        </li>
      </ul>

      <div className="border-t border-t-[#003] bg-[#fafafa] mt-7">
        <p className="font-semibold text-center py-5">
          &copy; {new Date().getFullYear()} Wear4u. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
