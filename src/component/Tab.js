import React from "react";

const Tab = ({ title, closable, onClose }) => {
  return (
    <div className="tab">
      <span>{title}</span>
      {closable && <button onClick={onClose}>x</button>}
    </div>
  );
};

export default Tab;
