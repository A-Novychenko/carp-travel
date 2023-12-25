type ChooseUsForm = {
  name: string;
  email: string;
  position: string;
  phoneNumber: string;
  message: string;
  consent: string;
};

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

interface INavlinksProps {
  handleCloseMenu?: () => void;
  handleCloseMenuOnBackdrop?: (e: React.MouseEvent) => void;
}
