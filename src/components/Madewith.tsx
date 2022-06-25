import React from "react";

type Props = {
  icon1?: string;
  icon2?: string;
  icon3?: string;
  icon4?: string;
  icon5?: string;
};

function Madewith({ icon1, icon2, icon3, icon4, icon5 }: Props) {
  if (icon5 !== undefined) {
    return (
      <div className="madewith">
        <p>Made with:</p>
        <div className="skills">
          <img src={icon1} alt="icon" />
          <img src={icon2} alt="icon" />
          <img src={icon3} alt="icon" />
          <img src={icon4} alt="icon" />
          <img src={icon5} alt="icon" />
        </div>
      </div>
    );
  }
  if (icon4 !== undefined) {
    return (
      <div className="madewith">
        <p>Made with:</p>
        <div className="skills">
          <img src={icon1} alt="icon" />
          <img src={icon2} alt="icon" />
          <img src={icon3} alt="icon" />
          <img src={icon4} alt="icon" />
        </div>
      </div>
    );
  }
  if (icon3 !== undefined) {
    return (
      <div className="madewith">
        <p>Made with:</p>
        <div className="skills">
          <img src={icon1} alt="icon" />
          <img src={icon2} alt="icon" />
          <img src={icon3} alt="icon" />
        </div>
      </div>
    );
  }
  if (icon2 !== undefined) {
    return (
      <div className="madewith">
        <p>Made with:</p>
        <div className="skills">
          <img src={icon1} alt="icon" />
          <img src={icon2} alt="icon" />
        </div>
      </div>
    );
  }
  if (icon1 !== undefined) {
    return (
      <div className="madewith">
        <p>Made with:</p>
        <div className="skills">
          <img src={icon1} alt="icon" />
        </div>
      </div>
    );
  }
  return (
    <div className="madewith">
      <p>Made with:</p>
      <div className="skills">
        <img src={icon1} alt="icon" />
      </div>
    </div>
  );
}

export default Madewith;
