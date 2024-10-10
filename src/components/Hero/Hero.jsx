import heroBg from "../../assets/hero-bg.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="w-full relative">
      <img src={heroBg} alt="" className="absolute top-0 left-2/4 -z-10 -translate-x-2/4 max-w-[1640px] h-[80vh] object-cover" />
      <div className="container flex justify-end items-center h-[80vh] px-10">
        <div className="flex justify-center items-center w-[643px] h-[443px] bg-[#FFF3E3]">
          <div className="text-left p-5">
            <p className="tracking-[3px] text-[#B88E2F]">{t("Home.hero.p1")}</p>
            <h1 className="text-6xl font-bold mb-5 text-[#B88E2F]">{t("Home.hero.h1")}</h1>
            <p className="text-xl mb-5">{t("Home.hero.lorem§")}</p>
            <button className="p-5 px-16 bg-[#B88E2F] text-white">{t("Home.hero.btn")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
