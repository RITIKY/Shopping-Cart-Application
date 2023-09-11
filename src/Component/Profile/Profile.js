import React from "react";
import "./profile.css";

const Profile = () => {
  let name = sessionStorage.getItem("name");
  let username = sessionStorage.getItem("username");
  let age = sessionStorage.getItem("age");

  return (
    <div className="box">
      <h4>Name : {name} Yadav </h4>
      <h4>UserName : ritik@mail.com</h4>
      <h4>Phone : 8227929222</h4>
    </div>
  );
};

export default Profile;
