import { memo } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import { ExplorButton } from "./buttons";
import { JumboButton } from "./buttons/jumbo_button";
import { LeafGold } from "../assets";
import { UmbrellaGold } from "../assets";
import { SwapGold } from "../assets";
import { goldframe } from "../assets";
import { CCoinGold } from "../assets";
import { groupcoin } from "../assets";

const FeatureCard = ({ icon, title, content, index, customClassName }) => {
  const tops = ["130px", "130px", "-65px", "-65px"];
  const lefts = ["260px", "-487px", "260px", "-487px"];
  // Buy, Swap,Loan, Mint
  return (
    <div
      className={` flex-wrap flex flex-row p-6 items-center py-[6px]  px-4 bg-gradient-to-b from-[#151515] to-[#323232]  rounded-[16px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card ${customClassName}`}
      style={{
        // background: borderColors[index],
        top: tops[index],
        left: lefts[index],
        // bottom: bottoms[index],
      }}
    >
      <div
        className={` w-[48px] h-[48px] rounded-full ${styles.flexCenter} bg-stone-900`}
        style={{
          background:
            "linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
        }}
      >
        <img
          loading="lazy"
          src={icon}
          alt="star"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col  ml-3 mt-3">
        <h4
          id="about"
          className="font-montserrat font-semibold text-[18px] leading-[23.4px] mb-1 text-baseAssets"
        >
          {title}
        </h4>
        <p className="text-justify font-poppins font-[300] text-dimWhite text-[13px] ">
          {content}
        </p>
      </div>
    </div>
  );
};

const Coin = () => (
  <section id="features" className=" flex  flex-col my-5 ">
    <div
      className={`${layout.sectionInfo}  sm:mt-0 mt-[200px] max-[376px]:mt-[100px]  `}
    >
      <h2 className=" text-center pb-4 font-poppins text-transparent bg-clip-text bg-gradient-to-b from-[#846424] to-[#EDC452] min-[1700px]:text-[52px] ">
        About Chrysus Coin (CHAU) <br className="sm:block hidden" />
      </h2>
      <p
        className={`${styles.paragraph} text-justify text-[16px] leading-[24px] max-w-[1075px]  min-[1700px]:max-w-[1500px] min-[2000px]:max-w-[1700px] min-[1700px]:text-[22px] min-[1700px]:leading-[40px] `}
      >
        Project Chrysus aims to be a fully decentralized ecosystem revolving
        around Chrysus Coin.{" "}
        <span className="text-[#EDC452]"> Chrysus Coin (Chrysus)</span> is an
        ERC20 token, deployed on the Ethereum network which is pegged to the
        price of gold (XAU/USD) using{" "}
        <span className="text-[#EDC452]"> Decentralized Finance (DeFi)</span>{" "}
        best practices. The ecosystem around Chrysus will involve a SWAP
        solution, a lending solution and an eCommerce integration solution
        allowing for the use of Chrysus outside of the DeFi ecosystem. One of
        the main goals of Chrysus is to not just closely follow the price of
        gold, but also to be a cash flow generating token. This is achieved
        through the
        <span className="text-[#EDC452]">
          {" "}
          Chrysus Governance Token (CGOV)
        </span>{" "}
        which will serve both as a decentralization tool for the system and as a
        reward tool for Chrysus token minters.
      </p>
      <a
        target="_blank"
        href="https://medium.com/@chrysus_coin/chrysus-coin-the-new-coin-of-the-future-bc0d17f445ac"
      >
        <ExplorButton className="my-3 mb-5 " />
      </a>
    </div>
    <div className="flex flex-col items-center lg:hidden   block">
      <div>
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            {...feature}
            index={index}
            className="w-[444px] h-[50px]"
            // customClassName={`card-${index}`}
          />
        ))}
      </div>
    </div>
    <div className="lg:block hidden  bg-[url('./assets/bg-overlay.png')]  lg:bg-contain bg-auto">
      <div
        className={` ${styles.flexCenter}
    h-[502px]  `}
      >
        <div className="  h-[203px] w-[300px] relative ">
          <div className="md:flex flex-col sm:flex-wrap">
            <div className={`${layout.sectionImg}  `}>
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.id}
                  {...feature}
                  index={index}
                  customClassName={`card-${index} absolute w-[444px] h-[120px]`}
                />
              ))}
            </div>
            <span className="action action-center ">
              <img
                src={groupcoin}
                alt="c-coin-gold.sg"
                className="h-[203px] w-[300px]  "
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default memo(Coin);
