// import React from 'react'
import { useContext } from "react";
import { AppContext } from "../context/App_Context";

const Profile = () => {
  const { user , userRecipe} = useContext(AppContext);

  // console.log(user);

  return (
    <>
      <div className="container text-center my-3">
        <h1>{user.name}</h1>

        <h2>{user.email}</h2>
      </div>

      <div className="card_container">
        {/* <div className=""> */}
        {userRecipe?.map((data) => (
          <div className="card" key={data?._id}>
            {/* <div className=""> */}
            <div className="card_img">
              <img src={data.imgUrl} className="" alt="..." />
            </div>
            <div className="card_body">
              <h5 className="card_title">{data.title}</h5>
            </div>
          </div>
          // </div>
        ))}
        {/* </div> */}
      </div>
    </>
  );
};

export default Profile;
