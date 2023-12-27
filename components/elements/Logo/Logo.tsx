import Image from "next/image";

import logoImg from "@/public/logo.png";

export const Logo = () => (
  <div className="w-[61px] h-[34px]">
    <Image
      src={logoImg}
      alt="Company `s logo"
      width={61}
      height={34}
      className="block w-full h-full"
    />
  </div>
);
