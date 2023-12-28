import { Logo } from '@/components/elements/Logo/Logo';
import { MobileMenu } from '@/components/elements/MobileMenu/MobileMenu';
import { Navlinks } from '@/components/elements/NavLinks/Navlinks';

export const Header = () => {
  return (
    <div className="absolute w-full top-0 left-0 bg-opacity-0">
      <div className="ui-container">
        <header
          className="flex justify-between mt-9 md:mt-6"
          role="navigation"
          aria-label="Primary navigation"
        >
          <Logo />
          <div className="hidden md:block">
            <Navlinks />
          </div>
          <div className="flex justify-center items-center md:hidden">
            <MobileMenu />
          </div>
        </header>
      </div>
    </div>
  );
};
