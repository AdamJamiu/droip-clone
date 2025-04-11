import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface INavLink {
  label: string;
  onClose: () => void;
  icon: string | StaticImport;
}

const NavLink = ({ label, icon, onClose }: INavLink) => {
  return (
    <Link
      href="#"
      onClick={onClose}
      className="hover:bg-[#ebe8fe] flex justify-start items-center gap-4 md:gap-5 px-3 lg:px-4 py-4 rounded-xl ease transition-all duration-500 text-black text-sm"
    >
      <Image
        width={20}
        height={20}
        className="rounded-lg"
        alt={label}
        src={icon}
      />
      <p>{label}</p>
    </Link>
  );
};

export default NavLink;
