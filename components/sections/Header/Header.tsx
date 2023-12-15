import {Logo} from "@/components/elements/Logo/Logo";
import {Navlinks} from "@/components/elements/NavLinks/Navlinks";

export const Header = () => {
  return (
    <header>
      <Logo />
      <nav>
        <Navlinks />
      </nav>
    </header>
  );
};
