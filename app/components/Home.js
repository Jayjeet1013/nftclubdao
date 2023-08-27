import React from "react";
import Image from "next/image";
import Link from "next/link";
import pic1 from "public/pic1.png";
import { Container } from "postcss";

const Home = () => {
  return (
    <div className="bg-black h-screen py-12 md:py-24">
      <div className="  flex md:flex-row flex-col  justify-center items-center max-w-screen-xl  mx-auto">
        <div className="text-white md:px-8 py-4 md:py-24 px-12  ">
          <h1 className="text-4xl font-bold pb-4">Building New Experiences</h1>
          <h2 className="text-2xl  font-bold pb-4">
            <span>Using</span> Digital Assets
          </h2>
          <h3 className=" text-xl pb-4">
            NFTClub DAO is a Community focused NFT accelerator
          </h3>
          <div className=" flex  md:flex-row md:gap-0 gap-6 flex-col">
            <button className="bg-purple-600 text-white font-bold px-4 py-2  rounded pb-2 md:pb-0 md:pr-2">
              Join Our Community
            </button>
            <button className="border text-purple-600 font-bold px-4 py-2 mx-4 rounded md:pb-0 md:pr-2">
              Explore Our Services
            </button>
          </div>
        </div>

        <div className="">
          <Image src={pic1} className="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
