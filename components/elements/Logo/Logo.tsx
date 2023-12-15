import Image from "next/image";

import logoImg from "@/public/logo.png";

export const Logo = () => (
  <div>
    <Image src={logoImg} alt="Company `s logo" width={61} height={34} />
  </div>
);
