import React from "react";

const Icon = ({ name }) => {
  switch (name) {
    case "close": {
      return (
        <span>
          <i className="fa fa-close" />
        </span>
      );
    }
    default: {
      return <span />;
    }
  }
};

export default Icon;
