import React from "react";
import "../index.scss";

const AdminLogi = () => {
  return (
    <div className="adminLogin">
      <form>
        <p>Admin Login</p>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password"/>
        <input type="button" value="Login" />
      </form>
    </div>
  );
};

export default AdminLogi;
