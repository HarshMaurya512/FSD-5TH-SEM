import React from "react";
import ChildComponent from "./ChildComponent";

const App = () => {
  const user = {
    name: "Harsh",
    email: "harsh@example.com",
    section: "cse-18",
  };
  return (
    <div>
      <ChildComponent user={user} />
    </div>
  );
};

export default App;
