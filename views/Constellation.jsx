const React = require("react");

module.exports = function Constellation({ width, height, children }) {
  return (
    <div
      className="relative group"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {children}
    </div>
  );
};
