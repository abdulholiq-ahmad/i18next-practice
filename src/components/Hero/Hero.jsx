import heroBg from "../../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="w-full relative">
      <img src={heroBg} alt="" className="absolute top-0 left-2/4 -z-10 -translate-x-2/4 max-w-[1440px] h-[80vh] object-cover" />
      <div className="container"></div>
    </section>
  );
};

export default Hero;
