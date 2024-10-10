import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="w-full shadow-sm">
      <div className="container flex justify-between items-center py-4 ">
        <Link to="/">
          <img src={logo} alt="Logo" width={200} height={200} />
        </Link>

        <ul className="flex items-center gap-8 text-lg font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <ul className="flex items-center gap-6">
          <li>
            <Link to="/login">
              <FaRegUser className="text-lg" />
            </Link>
          </li>
          <li>
            <button>
              <IoSearch className="text-xl" />
            </button>
          </li>
          <li>
            <button>
              <IoMdHeartEmpty className="text-xl" />
            </button>
          </li>
          <li>
            <button>
              <IoCartOutline className="text-xl" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
