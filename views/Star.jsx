const React = require("react");

const sizeMap = {
  big: "w-4 h-4",
  medium: "w-2 h-2",
  small: "w-1 h-1",
};

module.exports = function Star({ size = "big", x, y }) {
  let sizeClass = sizeMap[size];
  return (
    <span
      className={`absolute bg-white block rounded-full ${sizeClass}`}
      style={{ left: `${x}%`, top: `${y}%` }}
    ></span>
  );
};
