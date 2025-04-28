import Link from "next/link";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <div className="flex justify-around">
      <NavLink linkLocation={"/"}>Who Are We</NavLink>
      <NavLink linkLocation={"/"}>What Do We Do</NavLink>
      <NavLink linkLocation={"/"}>News</NavLink>
      <NavLink linkLocation={"/"}>Career</NavLink>
    </div>
  );
};

export default NavBar;
