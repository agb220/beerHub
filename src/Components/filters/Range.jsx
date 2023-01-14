import React from "react";

function Range() {
  return (
    <div>
      <div className="sidebar-range">
        <div className="range-controls">
          <span>від</span>
          <div className="range-interval">
            <input className="range-interval__input" type="number" />
          </div>
          <span>до</span>
          <div className="range-interval">
            <input className="range-interval__input" type="number" />
          </div>
          <button className="range-btn" type="reset">
            Ok
          </button>
        </div>
        <div className="sidebar-range__block">
          <input className="range" type="range" min="0" max="18" step="0.1" />
        </div>
      </div>
    </div>
  );
}

export default Range;
