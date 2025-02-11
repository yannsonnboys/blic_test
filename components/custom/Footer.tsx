import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="px-4 py-3 flex flex-col gap-4">
      {/* <hr /> */}
      {/* <div className="text-4xl font-bold text-[#2446aa] text-center">
        Our Partners & Donors
      </div> */}
      {/* <div className="text-4xl font-bold text-[#FDAB04] text-center">
        Our Partners & Donors
      </div> */}
      <div className="flex flex-col gap-4 items-center">
        <Image
          src="/YC_Logo.png"
          alt="image"
          width={35}
          height={30}
          className="object-cover w-[35px] h-[30px] rounded-lg"
        />
      </div>
      <p className="text-sm font-bold text-center text-gray-500">
        Design and Developed by{" "}
        <a
          href="https://yemoconsulting.com"
          target="_blank"
          style={{ color: "#2446aa" }}
        >
          Yemo Consulting
        </a>
      </p>
      {/* <hr /> */}
    </div>
  );
}

export default Footer;
