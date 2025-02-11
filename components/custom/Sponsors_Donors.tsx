import Image from "next/image";
import React from "react";

function Sponsors_Donors() {
  return (
    <div className="px-4 py-3 flex flex-col gap-4">
      <hr />
      <div className="text-4xl font-bold text-[#2446aa] text-center">
        Our Partners & Sponsors
      </div>
      <br />
      {/* <div className="text-4xl font-bold text-[#FDAB04] text-center">
        Our Partners & Donors
      </div> */}
      {/* <h4 className="text-2xl font-bold text-center text-[#2446aa]">
        Baobab Language Institute of California
      </h4> */}
      <div className="flex gap-4 flex-wrap items-center justify-evenly">
        <Image
          src="/Partners/P1.png"
          alt="image"
          width={120}
          height={100}
          className="object-cover w-[120px] h-[100px] rounded-xl"
        />
        <Image
          src="/Partners/P2.png"
          alt="image"
          width={120}
          height={100}
          className="object-cover w-[120px] h-[100px] rounded-xl"
        />
        <Image
          src="/Partners/P3.png"
          alt="image"
          width={120}
          height={100}
          className="object-cover w-[120px] h-[100px] rounded-xl"
        />
        <Image
          src="/Donors/D1.png"
          alt="image"
          width={120}
          height={100}
          className="object-cover w-[120px] h-[100px] rounded-xl"
        />
        <Image
          src="/Donors/D2.png"
          alt="image"
          width={120}
          height={100}
          className="object-cover w-[120px] h-[100px] rounded-xl"
        />
        <Image
          src="/Donors/D3.png"
          alt="image"
          width={120}
          height={100}
          className="object-cover w-[120px] h-[100px] rounded-xl"
        />
        <Image
          src="/Donors/D4.png"
          alt="image"
          width={120}
          height={100}
          className="object-cover w-[120px] h-[100px] rounded-xl"
        />
        <Image
          src="/Donors/D5.png"
          alt="image"
          width={120}
          height={100}
          className="object-cover w-[120px] h-[100px] rounded-xl"
        />
        <Image
          src="/Donors/D6.png"
          alt="image"
          width={120}
          height={100}
          className="object-cover w-[120px] h-[100px] rounded-xl"
        />
        <Image
          src="/Donors/D7.png"
          alt="image"
          width={120}
          height={100}
          className="object-cover w-[120px] h-[100px] rounded-xl"
        />
        <Image
          src="/Donors/D8.png"
          alt="image"
          width={120}
          height={100}
          className="object-cover w-[120px] h-[100px] rounded-xl"
        />
      </div>
      <hr />
    </div>
  );
}

export default Sponsors_Donors;
