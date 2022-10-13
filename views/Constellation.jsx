const React = require("react");

module.exports = function Constellation({
  width,
  height,
  children,
  horoscope,
}) {
  return (
    <div
      className="relative group overflow-y-scroll constellation"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {children}
      <div className="opacity-0 transition-opacity duration-300 text-sm constellation-content">
        <a
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?text=${horoscope}`}
          data-size="large"
        >
          Tweet
        </a>
        <p className="mt-4">
          {horoscope.split(".").slice(0, 2).join(".") + "."}
        </p>
      </div>
    </div>
  );
};
