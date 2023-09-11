import React from "react";
import "./profile.css";

const Profile = () => {
  let name = sessionStorage.getItem("name");
  let username = sessionStorage.getItem("username");
  let age = sessionStorage.getItem("age");

  return (
    <div className="box">
      <h4>Name : {name} Yadav </h4>
      <h4>UserName : ritikyadav0178@gmail.com</h4>
      <h4>Phone : 8972179937</h4>
    </div>
  );
};

export default Profile;
