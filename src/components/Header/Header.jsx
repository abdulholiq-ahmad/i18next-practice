import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState("uz");

  const { t, i18n } = useTranslation();
  useEffect(
    (e) => {
      i18n.changeLanguage(language);
    },
    [language]
  );

  return (
    <header className="w-full shadow-sm">
      <div className="container flex justify-between items-center py-4 ">
        <Link to="/">
          <img src={logo} alt="Logo" width={200} height={200} />
        </Link>

        <ul className="flex items-center gap-8 text-lg font-medium">
          <li>
            <Link to="/">{t("Header.home")}</Link>
          </li>
          <li>
            <Link to="/about">{t("Header.home")}</Link>
          </li>
          <li>
            <Link to="/shop">{t("Header.shop")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("Header.contact")}</Link>
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
        <select defaultValue={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="uz">Uz</option>
          <option value="eng">Eng</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
