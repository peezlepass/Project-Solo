const React = require("react");

module.exports = function Constellation({
  width,
  height,
  children,
  horoscope,
  label,
}) {
  const shortHoroscope = horoscope.split(".").slice(0, 2).join(".") + ".";
  const variance = 200;
  const yOffset = Math.round(Math.random() * variance - variance / 2);
  const xOffset = Math.round(Math.random() * variance - variance / 2);
  return (
    <div
      className="relative group overflow-y-scroll constellation"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top: `${yOffset}px`,
        left: `${xOffset}px`,
      }}
    >
      {children}
      <div className="opacity-0 transition-opacity duration-300 text-sm constellation-content">
        <a
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?text=${shortHoroscope}`}
          data-size="large"
        >
          Tweet
        </a>
        <h3 className="mt-4 text-md font-bold">{label.toUpperCase()}</h3>
        <p className="mt-4">{shortHoroscope}</p>
      </div>
    </div>
  );
};
