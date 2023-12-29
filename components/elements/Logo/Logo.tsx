import Image from 'next/image';

import logoImg from '@/public/logo.png';
import Link from 'next/link';

export const Logo = () => (
  <Link href="/" className="cursor-pointer" aria-label="Link to homepage">
    <div className="w-[61px] h-[34px]">
      <Image
        src={logoImg}
        alt="Company `s logo"
        width={61}
        height={34}
        className="block w-full h-full scale-100 transition-all hover:scale-105"
        aria-label="Company's logo, link to homepage"
      />
    </div>
  </Link>
);
