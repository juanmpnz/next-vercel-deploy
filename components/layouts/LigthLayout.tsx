import React from "react";

interface props {
    children?: JSX.Element|JSX.Element[];
 }

export const LigthLayout = ({ children }: props) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
      }}
    >
      <h3>Light layoyt</h3>
      <div>{children}</div>
    </div>
  );
};
