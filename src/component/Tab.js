import React from "react";
import "../component/TabBar.css";

const Tab = ({ title, closable, onClose }) => {
  return (
    <div className="tab">
      <span>{title}</span>
      {closable && (
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      )}
    </div>
  );
};

export default Tab;
