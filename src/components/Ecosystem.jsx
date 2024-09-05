import { apple, google, EcosystemImage2 } from "../assets";
import { memo } from "react";
import styles, { layout } from "../style";
import { ReadButton } from "./buttons";

const Ecosystem = () => (
  <div className="bg-[url('./assets/bg-overlay.png')] lg:bg-contain bg-auto  sm:px-7  ">
    <h2
      id="ecosystem"
      className="text-center pb-4 font-poppins text-transparent bg-clip-text bg-gradient-to-b from-[#846424] to-[#EDC452]"
    >
      Chrysus Ecosystem
    </h2>
    {/* lg:flex-col sm:flex-col md:flex-row */}
    <section
      id="product"
      className="flex gap-5 max-[900px]:flex-col min-[2000px]:px-[150px] min-[2200px]:px-[200px]  min-[2400px]:px-[280px] min-[2000px]:justify-between justify-center items-center"
    >
      {/* <div className="min-w-100"> */}
      {/* xl:min-w-[25%] min-w-[570px] */}
      <div
        className={`w-100 max-w-[582px] flex flex-col align-items-start py-[6px] px-4 bg-gradient-to-b from-[#151515] to-[#323232] rounded-[12px] min-[650px]:mb-3  `}
      >
        <p className={`${styles.paragraph} leading-[24px] text-[16px] mt-5 `}>
          The <span className="text-[#EDC452]">Chrysus ecosystem</span> is a
          blockchain-based financial infrastructure enabling users to earn
          yield, borrow and lend, and access DeFi liquidity through a unified
          platform. It utilizes{" "}
          <span className="text-[#EDC452]"> Chrysus Protocols</span> to create a
          secure, transparent, and efficient system for exchanging digital
          assets and fiat currency. The Chrysus coin ecosystem is powered by{" "}
          <span className="text-[#EDC452]">Chrysus tokens</span>, which govern
          the network, incentivize user engagement, and facilitate transactions
          within the platform.
        </p>
        <a
          style={{ color: "#846424" }}
          target="_blank"
          href="https://medium.com/@chrysus_coin/exploring-governance-and-voting-mechanisms-in-a-gold-pegged-stablecoin-chrysus-coin-9164f5fb53cc"
        >
          <ReadButton
            text="Explore More"
            className="my-3 mb-5  border-0 lowercase"
          />
        </a>
        {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6"></div> */}
      </div>
      {/* </div> */}
      {/* <div className={layout.sectionImgReverse}> */}
      <img
        loading="lazy"
        src={EcosystemImage2}
        alt="Ecosystem"
        className="animated  relative z-[5] min-[900px] max-[1100px]:w-[400px]  w-[642px] h-[340px]"
      />
      {/* </div> */}
    </section>
  </div>
);

export default memo(Ecosystem);
