import React from "react";
import "./HeadingSection.css"

function HeadingSection({type,title}) {
  return (
    <div className="heading-margin">
      <div className="heading-title">
        <span>{type}</span>
        <h2>
          <b>{title}</b>
        </h2>
      </div>
    </div>
  );
}

export default HeadingSection;
