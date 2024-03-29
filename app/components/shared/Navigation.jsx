'use client'
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Card,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
  


const Navigation = () => {
    const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Home
                </a>
                            

      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center">
       About Me
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#projects" className="flex items-center">
        Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#contact" className="flex items-center">
        Contact
        </a>
      </Typography>
        </ul>
      
    );
    
    const [openNav, setOpenNav] = useState(false);
 
        useEffect(() => {
          window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
          );
        }, []);
 


    return (
        <>
                  <Navbar className="sticky top z-10 h-max max-w-full rounded-xl py-2 px-4 lg:px-8 mb-28 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Sheikh Ashikuzzaman
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
           
              <a href='#social'>
              <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
                  Social
            </Button>
                </a>
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
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Social</span>
          </Button>
        </Collapse>
      </Navbar>

        </>
    );
};

export default Navigation;