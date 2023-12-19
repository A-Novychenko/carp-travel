import {Logo} from "@/components/elements/Logo/Logo";
import {MobileMenu} from "@/components/elements/MobileMenu/MobileMenu";
import {Navlinks} from "@/components/elements/NavLinks/Navlinks";

export const Header = () => {
  return (
    <div className="ui-container">
      <header className="flex justify-between">
        <Logo />
        <div className="hidden sm:block">
          <Navlinks />
        </div>
        {/* <div className="block sm:hidden"> */}
        <div>
          <MobileMenu />
        </div>
      </header>
    </div>
  );
};
