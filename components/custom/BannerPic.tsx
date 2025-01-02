import Image from "next/image";
import React from "react";

function BannerPic() {
  return (
    <div className="px-4 py-3 flex flex-col gap-4">
      <div className="text-4xl font-bold text-[#FDAB04] text-center">
        Welcom to BLIC
      </div>
      <h4 className="text-2xl font-bold text-center text-[#2446aa]">
        Baobab Language Institute of California
      </h4>
      <hr />
      <div className="flex gap-4 justify-between">
        <Image
          src="/Pic1.jpg"
          alt="image"
          width={500}
          height={500}
          className="object-cover w-[320px] h-[300px] rounded-xl"
        />
        <Image
          src="/Pic2.jpg"
          alt="image"
          width={500}
          height={500}
          className="object-cover w-[320px] h-[300px] rounded-xl"
        />
        <Image
          src="/Pic3.jpg"
          alt="image"
          width={500}
          height={500}
          className="object-cover w-[320px] h-[300px] rounded-xl"
        />
      </div>
      <hr />
    </div>
  );
}

export default BannerPic;
