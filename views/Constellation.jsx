const React = require("react");

module.exports = function Constellation({ width, height, children }) {
  return (
    <div
      className="relative border border-gray"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {children}
    </div>
  );
};
