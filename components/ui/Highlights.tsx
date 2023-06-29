import React, { Fragment } from "react";
import { HighlightsProps } from "../../interface";

const Highlights: React.FunctionComponent<HighlightsProps> = ({
  label,
  link,
  naviTo,
}) => {
  if (naviTo == "useNavigate") {
    return (
      <Fragment>
        <span className="highlights font-semibold text-white">
          <a href={link} target="__blank">
            {label}
          </a>
        </span>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <span className="highlights font-semibold text-white">{label}</span>
    </Fragment>
  );
};

export default Highlights;
