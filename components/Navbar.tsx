import { nav } from "@/data/content";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="dock" aria-label="Main navigation">
      {nav.map(({ href, label, icon: Icon }) => (
        <Link href={href} key={href} className="dock-link" aria-label={label}>
          <Icon size={20} strokeWidth={1.8} />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
