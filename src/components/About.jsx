import React from "react";
import styles from "../style";
import { mapVideo, GIFMap, Picture } from "../assets";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { H4 } from "./typography/h4";
import { ReadButton } from "./buttons";

const About = () => {
  return (
    <div className="bg-[url('./assets/bg-overlay.png')] lg:bg-contain bg-auto">
      <div className={`${styles.paddingXX} ${styles.flexCenter} `}>
        {/* <div className={`${styles.boxWidth}`}> */}
        <Navbar />
      </div>
      {/* </div> */}
      <div className="container">
        <div>
          <div className={`${styles.boxWidth}`}>
            <H4>
              <h1
                className="text-[32px] leading-[32px] font-[600] text-center font-montserrat mt-[70px] mb-[50px]"
                style={{ color: "#846424" }}
              >
                About Us
              </h1>
            </H4>
            <p
              className="text-justify"
              // className={` text-center ${styles.flexCenter}`}
              style={{
                color: "#FFFFFF",
                lineHeight: "24px",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "16px",
                marginTop: "50px",
                marginBottom: "60px",
              }}
            >
              Chrysus envisions a fully decentralized ecosystem centered on
              Chrysus Coin{" "}
              <span className="text-[#EDC452]">(Chrysus), an ERC20</span> token
              pegged to gold's price via DeFi on Ethereum. The ecosystem
              includes a SWAP solution, lending, and eCommerce integration.
              Chrysus aims not only to track gold's value but also generates
              income through the{" "}
              <span className="text-[#EDC452]">
                Chrysus Governance Token (CGOV)
              </span>
              , serving as a decentralization and reward tool. Fees collected
              are redistributed to active CGOV holders, enhancing platform
              stability.
            </p>
            <div className="flex justify-center">
              <ReadButton text="Explore Technology" />
            </div>
            <H4>
              <p
                className="text-center font-montserrat lg:mt-[100px] mt-[50px]  mb-[30px]"
                style={{
                  fontWeight: "700",
                  fontSize: "32px",
                  lineHeight: "32px",
                  color: "#846424",
                }}
              >
                Our Roadmap
              </p>
            </H4>
            <div className="my-5 flex justify-center">
              <img src={Picture} alt="picture.png" />
              {/* <video controls>
                <source src={GIFMap} type="video/gif" />
              </video> */}
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-black   ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
