import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  // gets the route name from react router dom
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      {/* logo */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm font-semibold sm:text-xl dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          TRE
        </span>
        Blogger
      </Link>

      {/* search form */}
      <form>
        <TextInput
          type="text"
          placeholder="Search"
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      {/* search button  */}
      <Button className="w-12 h-10 lg:hidden" pill>
        <AiOutlineSearch />
      </Button>

      {/* mode and signin button */}
      <div className="flex gap-2 md:order-2">
        <Button className="w-10 h-10 hidden sm:inline-flex" color="light" pill>
          <FaMoon />
        </Button>

        <Link to="/sign-in">
          <Button outline gradientDuoTone="purpleToBlue">
            Sign in
          </Button>
        </Link>

        {/* burger menu */}
        <Navbar.Toggle />
      </div>

      {/* collapsable menu */}
      <Navbar.Collapse>
        <Navbar.Link
          active={path === "/"}
          className={path === "/" && "sm:border-b-2 sm:border-[#155E75]"}
          as={"div"}
        >
          <Link to="/">Home</Link>
        </Navbar.Link>

        <Navbar.Link
          active={path === "/about"}
          className={path === "/about" && "sm:border-b-2 sm:border-[#155E75]"}
          as={"div"}
        >
          <Link to="/about">About</Link>
        </Navbar.Link>

        <Navbar.Link
          active={path === "/projects"}
          className={path === "/projects" && "sm:border-b-2 sm:border-[#155E75]"}
          as={"div"}
        >
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
