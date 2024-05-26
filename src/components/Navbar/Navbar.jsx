import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">

        <div className="container flex justify-between items-center ">
          {/* Logo and Links section */}
          <a
            href="#"
            className='text-primary dark:text-brandBlue font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
          >
            VSPORTS JP
          </a>

        {/* Navbar Right section */}
        <div className="flex justify-between items-center gap-4">

          {/* Search Bar section */}
          <div className="relative group hidden sm:block">
            <input
              type="text"
              placeholder="Pesquisa"
              className="search-bar"
            />
            <IoMdSearch
              className="
              text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 
              absolute top-1 translate-y-1 right-3 duration-200"
            />
          </div>
        {/* Order-button section */}
        <button className="relative p-3">

          <FaCartShopping 
          className="text-xl text-gray-600 dark:text-gray-400"/>

          <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 
          flex items-center justify-center text-xs">
            4
            </div>
        </button>
        {/* Dark Mode section */}
        <div>
          <DarkMode/>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
