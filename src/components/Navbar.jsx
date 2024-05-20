// import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/App_Context";

const Navbar = () => {
  const { isAuthenticated , logout} = useContext(AppContext);

  return (
    <>
      <div className="nav bg-dark p-2">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "white" , fontFamily:'cursive'}}
          className="left"
        >
          <h2>MERN Recipe</h2>
        </Link>

        <div className="right">

          {isAuthenticated && (
            <>
              <Link to="/profile" className="btn btn-warning mx-2">
                Profile
              </Link>
              <Link to="/addRecipe" className="btn btn-info mx-2">
                Add
              </Link>
              <div className="btn btn-danger mx-2" onClick={logout}>
                Logout
              </div>
            </>
          )}

          {!isAuthenticated && (
            <>
              <Link to="/register" className="btn btn-warning mx-2">
                Register
              </Link>

              <Link to="/login" className="btn btn-primary mx-2">
                Login
              </Link>
            </>
          )}

          <Link to="/saved" className="btn btn-light mx-2">
            Saved
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
