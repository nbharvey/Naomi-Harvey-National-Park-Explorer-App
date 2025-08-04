import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "./CustomButton";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
 
export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navLinks = [
    { name: "My Parks", path: "/myparks" },
    { name: "Explore Parks", path: "/explore"},
    { name: "Games", path: "/games" },
    { name: "Library", path: "/bookshelf" },
    { name: "Maps", path: "/maps" },
    { name: "Blog", path: "/blog" },

  ];
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
      {navLinks.map(({ name, path }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium font-NaomiFont2"
        >
          <Link to={path} className="flex items-center">
            {name}
          </Link>
        </Typography>
      ))}
    </ul>
  );
 
  return (
    <Navbar fullWidth className="sticky top-0 z-50 rounded-none border-b bg-teal-900 border-teal-900 px-4 py-2 lg:px-8 lg:py-2">
      <div className="flex items-center justify-between text-white ">
        <Typography
          as={Link}
          to="/"
          className="mr-4 cursor-pointer py-1.5 font-NaomiFont2 font-bold"
        >
          National Parks Explorer
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <CustomButton variant="text" size="sm" className="hidden lg:inline-block">
            <span>Log In</span>
          </CustomButton>
          <CustomButton
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Sign in</span>
          </CustomButton>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          {/*TODO: implement sign-in and create-account button functionality*/}
          {/* <div className="flex items-center gap-x-1">
            <CustomButton fullWidth variant="text" size="sm" className="">
              <span>Create Account</span>
            </CustomButton>
            <CustomButton fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </CustomButton>
          </div> */}
        </div>
      </Collapse>
    </Navbar>
  );
}
