import "./Footer.css";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 left-0  z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="./src/assets/justlogo.png"
              className="h-10 pt-1"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              HARMONYCARE
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
            <li>
              <a href="/about" className="font-semibold hover:underline me-4 md:me-6">
                ABOUT
              </a>
            </li>
            <li>
              <div className="flex justify-center items-center">
                <img src="./src/assets/phone.svg" alt=""/>
                <a href="#" className="font-semibold hover:underline me-4 md:me-6">
                +44 20 7123 4567
              </a>
              </div>
            </li>
            <li><div className="flex justify-center items-center">
                <img src="./src/assets/mail.svg" alt=""/>
                <a href="#" className="font-semibold hover:underline me-4 md:me-6">
                harmonycarebot@gmail.com
              </a>
              </div></li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            HARMONYCARE
          </a>
          . DOLPHINS. ELBRUS.
        </span>
      </div>
    </footer>
  );
}
