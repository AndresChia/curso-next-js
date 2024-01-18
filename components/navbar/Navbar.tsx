import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItem = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex gap-5 bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link className="flex flex-1 items-center gap-2" href="/">
        <HomeIcon />
        Home
      </Link>
      {/* 
      
      {    
        navItem.map((element) => ActiveLink(element))
      } 
      
      solo si esta por server
      
      */}
      {navItem.map((element) => (
        <ActiveLink key={element.path} {...element} />
      ))}
    </nav>
  );
};
