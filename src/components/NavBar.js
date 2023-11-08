import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleRefresh = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <Fragment>
      {/* Navigation Bar */}
      <div className="backdrop-blur-lg bg-white bg-opacity-60 w-full h-full mt-0 pt-0">
        <div className="flex flex-row justify-between items-center p-4 w-auto mx-10 ">
          <h1
            className="text-xl font-bold items-center justify-center cursor-pointer hover:scale-110"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </h1>

          <h1 className="blue_btn cursor-pointer" onClick={handleRefresh}>
            Refresh Page
          </h1>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
