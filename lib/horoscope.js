const fetch = require("node-fetch-commonjs");
const db = require("../db/models");
const { Horoscope } = require("../db/models");

// fetching a horoscope from the unofficial astrology.com API
// It returns a promise which resolves to an object
// representing a horoscope of that sign for today's date

exports.getHoroscopeForSign = async function getHoroscopeForSign(sign) {
  // Look in database
  // if you find it
  //   return it
  // if you don't
  //   go fetch it
  //   save to database
  //   return it
  const dbHoroscope = await Horoscope.findOne({
    where: { sign, date: new Date() },
  });

  if (dbHoroscope) {
    return dbHoroscope;
  } else {
    //Go fetch the sign
    const response = await fetch(`https://ohmanda.com/api/horoscope/${sign}`);
    const result = await response.json();
    return await Horoscope.create({
      sign: result.sign,
      date: new Date(result.date),
      horoscope: result.horoscope,
    });
  }
};

// List of valid signs

exports.signs = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
];
