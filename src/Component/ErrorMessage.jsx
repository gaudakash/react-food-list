import React from "react";

const ErrorMessage = ({ Listitem }) => {
  return (
    Listitem.length === 0 && (
      <h3>Have U want Somthing ..... So , Search heare</h3>
    )
  );
};

export default ErrorMessage;
