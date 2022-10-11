const React = require("react");
const Constellation = require("./Constellation");
const Layout = require("./Layout");
const Star = require("./Star");

module.exports = function Home({ user }) {
  return (
    <Layout user={user}>
      <h1>Hello Solo Project</h1>
      <div className="flex gap-6 flex-wrap">
        <Constellation label="aries" width="300" height="300">
          <Star label="1" y="20" x="10" size="medium" />
          <Star label="2" y="45" x="55" size="big" />
          <Star label="3" y="55" x="75" size="medium" />
          <Star label="4" y="65" x="80" size="small" />
        </Constellation>

        <Constellation label="taurus" width="300" height="300">
          <Star label="1" y="5" x="5" size="small" />
          <Star label="2" y="10" x="25" size="big" />
          <Star label="3" y="25" x="40" size="small" />
          <Star label="4" y="35" x="48" size="small" />
          <Star label="5" y="44" x="52" size="small" />
          <Star label="6" y="36" x="2" size="small" />
          <Star label="7" y="40" x="35" size="big" />
          <Star label="8" y="44" x="45" size="small" />
          <Star label="9" y="55" x="62" size="small" />
          <Star label="10" y="59" x="75" size="small" />
          <Star label="11" y="68" x="83" size="medium" />
          <Star label="12" y="65" x="57" size="small" />
          <Star label="13" y="75" x="60" size="medium" />
        </Constellation>

        <Constellation label="gemini" width="300" height="300">
          <Star label="1" y="15" x="25" size="medium" />
          <Star label="2" y="35" x="10" size="big" />
          <Star label="3" y="55" x="40" size="small" />
          <Star label="4" y="60" x="55" size="small" />
          <Star label="5" y="75" x="75" size="medium" />
          <Star label="6" y="30" x="60" size="medium" />
          <Star label="7" y="38" x="75" size="small" />
          <Star label="8" y="37" x="85" size="small" />
        </Constellation>

        <Constellation label="cancer" width="300" height="300">
          <Star label="1" y="10" x="35" size="big" />
          <Star label="2" y="42" x="51" size="small" />
          <Star label="3" y="55" x="41" size="big" />
          <Star label="4" y="75" x="25" size="small" />
          <Star label="5" y="80" x="60" size="big" />
        </Constellation>
      </div>
      <div className="flex gap-6 flex-wrap">
        <Constellation label="leo" width="300" height="300">
          <Star label="1" y="55" x="10" size="big" />
          <Star label="2" y="40" x="40" size="medium" />
          <Star label="3" y="39" x="65" size="big" />
          <Star label="4" y="25" x="68" size="small" />
          <Star label="5" y="15" x="75" size="small" />
          <Star label="6" y="17" x="85" size="medium" />
          <Star label="7" y="60" x="40" size="medium" />
          <Star label="8" y="75" x="75" size="big" />
          <Star label="9" y="47" x="73" size="medium" />
        </Constellation>

        <Constellation label="virgo" width="300" height="300">
          <Star label="1" y="90" x="20" size="big" />
          <Star label="2" y="55" x="17" size="small" />
          <Star label="3" y="75" x="35" size="small" />
          <Star label="4" y="65" x="50" size="big" />
          <Star label="5" y="45" x="40" size="small" />
          <Star label="6" y="10" x="30" size="big" />
          <Star label="7" y="60" x="75" size="small" />
          <Star label="8" y="50" x="85" size="medium" />
          <Star label="9" y="35" x="90" size="small" />
        </Constellation>

        <Constellation label="libra" width="300" height="300">
          <Star label="1" y="30" x="25" size="small" />
          <Star label="2" y="10" x="48" size="big" />
          <Star label="3" y="25" x="75" size="big" />
          <Star label="4" y="65" x="65" size="medium" />
        </Constellation>

        <Constellation label="scorpio" width="300" height="300">
          <Star label="1" y="47" x="20" size="medium" />
          <Star label="2" y="55" x="15" size="small" />
          <Star label="3" y="67" x="11" size="big" />
          <Star label="4" y="78" x="22" size="small" />
          <Star label="5" y="81" x="35" size="small" />
          <Star label="6" y="77" x="47" size="small" />
          <Star label="7" y="60" x="50" size="big" />
          <Star label="8" y="40" x="57" size="small" />
          <Star label="9" y="30" x="65" size="big" />
          <Star label="10" y="27" x="75" size="small" />
          <Star label="11" y="12" x="78" size="medium" />
          <Star label="12" y="16" x="83" size="medium" />
          <Star label="13" y="22" x="89" size="medium" />
        </Constellation>
      </div>
      <div className="flex gap-6 flex-wrap">
        <Constellation label="sagittarius" width="300" height="300">
          <Star label="1" y="10" x="30" size="small" />
          <Star label="2" y="20" x="25" size="small" />
          <Star label="3" y="40" x="30" size="big" />
          <Star label="4" y="50" x="20" size="small" />
          <Star label="5" y="65" x="25" size="medium" />
          <Star label="6" y="50" x="50" size="small" />
          <Star label="7" y="45" x="65" size="medium" />
          <Star label="8" y="25" x="75" size="small" />
          <Star label="9" y="60" x="80" size="small" />
          <Star label="10" y="75" x="75" size="big" />
          <Star label="11" y="85" x="85" size="small" />
        </Constellation>

        <Constellation label="capricorn" width="300" height="300">
          <Star label="1" y="30" x="15" size="big" />
          <Star label="2" y="40" x="28" size="medium" />
          <Star label="3" y="38" x="40" size="small" />
          <Star label="4" y="44" x="49" size="small" />
          <Star label="5" y="65" x="30" size="medium" />
          <Star label="6" y="85" x="56" size="small" />
          <Star label="7" y="75" x="65" size="small" />
          <Star label="8" y="55" x="75" size="small" />
          <Star label="9" y="30" x="78" size="big" />
          <Star label="10" y="15" x="85" size="medium" />
        </Constellation>

        <Constellation label="aquarius" width="300" height="300">
          <Star label="1" y="80" x="15" size="big" />
          <Star label="2" y="67" x="25" size="big" />
          <Star label="3" y="60" x="30" size="small" />
          <Star label="4" y="50" x="20" size="small" />
          <Star label="5" y="25" x="25" size="small" />
          <Star label="6" y="24" x="34" size="small" />
          <Star label="7" y="30" x="43" size="small" />
          <Star label="8" y="25" x="50" size="big" />
          <Star label="9" y="40" x="67" size="big" />
          <Star label="10" y="53" x="87" size="medium" />
        </Constellation>

        <Constellation label="pieces" width="300" height="300">
          <Star label="1" y="5" x="40" size="small" />
          <Star label="2" y="10" x="35" size="small" />
          <Star label="3" y="15" x="38" size="small" />
          <Star label="4" y="20" x="45" size="small" />
          <Star label="5" y="34" x="25" size="big" />
          <Star label="6" y="55" x="15" size="medium" />
          <Star label="7" y="70" x="10" size="big" />
          <Star label="8" y="70" x="25" size="small" />
          <Star label="9" y="65" x="30" size="small" />
          <Star label="10" y="63" x="35" size="small" />
          <Star label="11" y="61" x="40" size="medium" />
          <Star label="12" y="59" x="46" size="medium" />
          <Star label="13" y="57" x="50" size="small" />
          <Star label="14" y="58" x="55" size="small" />
          <Star label="15" y="63" x="57" size="small" />
          <Star label="16" y="66" x="53" size="small" />
          <Star label="17" y="64" x="49" size="small" />
          <Star label="18" y="62" x="62" size="small" />
        </Constellation>
      </div>
    </Layout>
  );
};
