import React from "react";

const MyComponent = ({ url, message }) => {
  const handleClick = () => {
    console.log({ message });
    alert({ message });
  };

  return (
    <div>
      <a className="btn" onClick={handleClick} href={url} target="_blank">
        RUN
      </a>
      ;
    </div>
  );
};

export default MyComponent;
