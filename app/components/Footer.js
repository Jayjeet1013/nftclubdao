import React from "react";
import img_987 from "public/987.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black  py-16">
      <div className="bg-footerColor rounded-md text-white max-w-screen-xl mx-auto md:p-8 px-4">
        <div
          className="border  bg-gradient-to-r from-blue-500 to-blue-950 rounded-lg p-4 md:p-32 text-center bg-cover bg-center"
          style={{ backgroundImage: 'url("/bg_88.png")' }}
        >
          <div className="">
            {" "}
            <h1 className="text-2xl md:text-6xl px-8 ">
              Never Get Behind On NFTs!
            </h1>
            <p className="text-xl">
              Subscribe to receive market insights, growth hacks, stories, etc{" "}
            </p>
            <div className="flex text-center justify-center  md:p-2">
              <input
                className="  bg-gray-200 text-gray-700 border border-gray-200  py-1 px-2  focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Enter Your Email"
              />
              <button className="text-white bg-violet-700 md:p-2 ">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:py-32 py-8 justify-between md:px-12 ">
          <div className="mb-4 md:mb-0 md:mr-12">
            <Image src={img_987} className="w-56  " />
          </div>
          <div className="flex flex-col md:flex-row md:gap-24 gap-8  ">
            <div className=" md:text-lg text-sm  flex md:gap-0 gap-4 md:flex-col  ">
              <h1 className="md:text-2xl  py-1 md:py-2">Links</h1>
              <Link href="" className="  py-1 md:py-2">
                Home
              </Link>
              <Link href="" className="  py-1 md:py-2">
                Community
              </Link>
              <Link href="" className="  py-1 md:py-2">
                Services
              </Link>
            </div>

            <div className="  md:text-lg text-sm  flex md:gap-0 gap-4 md:flex-col ">
              <h1 className="md:text-2xl  py-1 md:py-2">Resources</h1>
              <Link href="" className="  py-1 md:py-2">
                About
              </Link>
              <Link href="" className="  py-1 md:py-2">
                Resources
              </Link>
              <Link href="" className="  py-1 md:py-2">
                Blogs
              </Link>
            </div>

            <div className="  md:text-lg text-sm flex md:gap-0 gap-4  md:flex-col ">
              <h1 className="md:text-2xl   py-1 md:py-2">Social Media</h1>
              <Link href="" className="  py-1 md:py-2">
                Twitter
              </Link>
              <Link href="" className=" py-1 md:py-2">
                Discord
              </Link>
              <Link href="" className=" py-1 md:py-2">
                Telegram
              </Link>
            </div>
          </div>
        </div>

        <hr />
        <div className="py-12 ">
          <h1 className="text-center">
            Copyright © Jayjeet. All rights reserved.
          </h1>
          <h2 className="text-center">Powered by NFTClub. xxxxx.</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
