import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import FeatureInfo from "../components/FeatureInfo";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <section className="features">
        <FeatureInfo
          image={"./img/icon-chat.png"}
          title={"You are our #1 priority"}
          description={
            "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          }
        />
        <FeatureInfo
          image={"./img/icon-money.png"}
          title={"More savings means higher rates"}
          description={
            "The more you save with us, the higher your interest rate will be!"
          }
        />
        <FeatureInfo
          image={"./img/icon-security.png"}
          title={"Security you can trust"}
          description={
            "We use top of the line encryption to make sure your data and money is always safe."
          }
        />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
