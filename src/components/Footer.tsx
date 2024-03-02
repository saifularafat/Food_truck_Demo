"use client";

import { GiFoodTruck } from "react-icons/gi";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-28 py-8 ">
      <footer className="footer">
        <nav>
          <h6 className="text-2xl text-[#212121] font-bold font-sans pb-5">
            Explore
          </h6>
          <Link
            href=""
            className="link link-hover hover:text-slate-600 text-[#757575] "
          >
            Find a Truck
          </Link>
          <Link
            href=""
            className="link link-hover hover:text-slate-600 text-[#757575] "
          >
            Book a Truck
          </Link>
          <Link
            href="/map"
            className="link link-hover hover:text-slate-600 text-[#757575] "
          >
            Map
          </Link>
        </nav>
        <nav>
          <h6 className="text-2xl text-[#212121] font-bold font-sans pb-5">
            Get to Know Us
          </h6>
          <Link
            href=""
            className="link link-hover hover:text-slate-600 text-[#757575] "
          >
            About us
          </Link>
          <Link
            href=""
            className="link link-hover hover:text-slate-600 text-[#757575] "
          >
            Help Center
          </Link>
          <Link
            href="/blogs"
            className="link link-hover hover:text-slate-600 text-[#757575] "
          >
            Blog
          </Link>
        </nav>
        <nav>
          <h6 className="text-2xl text-[#212121] font-bold font-sans pb-5">
            Vendor
          </h6>
          <Link
            href=""
            className="link link-hover hover:text-slate-600 text-[#757575] "
          >
            What is Truckster Vendor?
          </Link>
          <Link
            href=""
            className="link link-hover hover:text-slate-600 text-[#757575] "
          >
            Add My Truck Profile
          </Link>

          <Link
            href=""
            className="link link-hover hover:text-slate-600 text-[#757575] "
          >
            How to Start a Food Truck
          </Link>
        </nav>
      </footer>
      <footer className="flex items-center justify-between pt-28 text-base-content border-base-300">
        <aside className="">
          <div className="pt-6 text-[#A1A1A1]">
            <span> © 2024 StreetEats Hub. All rights reserved</span>
            <Link href="" className=" pl-8 hover:underline">
              Privacy & Terms
            </Link>
          </div>
        </aside>
        <nav className="md:place-self-center md:justify-self-end text-slate-500">
          <div className="grid grid-flow-col gap-6">
            <Link href="">
              <FaFacebookF className="text-xl font-medium hover:text-blue-500 transition-all duration-200 cursor-pointer" />
            </Link>
            <Link href="">
              <FaInstagram className="text-xl font-medium hover:text-[#EA2661] transition-all duration-200 cursor-pointer" />
            </Link>
            <Link href="">
              <FaTiktok className="text-xl font-medium hover:text-black transition-all duration-200 cursor-pointer" />
            </Link>
            <Link href="">
              <FaTwitter className="text-xl font-medium hover:text-blue-400 transition-all duration-200 cursor-pointer" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
