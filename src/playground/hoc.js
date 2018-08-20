console.log("hoc");
// Higher Order Component (HOC)
// - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// prop manipulation
// abstract state

import React from "react";
import ReactDOM from "react-dom";

// Regular Component
const Info = props => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
  );
};

// HOC Component
const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share</p>}

      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>You are not authenticated. Please Log in</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="Jewish people are actually Jews" />,
//   document.getElementById("app")
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={false} />,
  document.getElementById("app")
);
