import React from "react";

const ChildComponent = ({ user }) => {
    // const { user, email, section } = user
  return (
    <div>
      <h1>user data</h1>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <h2>{user.section}</h2>
    </div>
  );
};

export default ChildComponent;
