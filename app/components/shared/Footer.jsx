import { Typography } from "@material-tailwind/react";

const Footer = () => {

    return (
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
        <Typography
          variant="small"
          className="mb-4 text-center font-normal text-white md:mb-0"
        >
          &copy; 2023 <a>Sheikh Ashikuzzaman</a>. All
          Rights Reserved.
        </Typography>
        <div></div>
            </div>

    );
};

export default Footer;