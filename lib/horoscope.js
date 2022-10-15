const fetch = require("node-fetch-commonjs");
const db = require("../db/models");
const { Horoscope } = require("../db/models");
const user = require("../db/models/user");

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

  console.log("a", new Date());
  const dbHoroscope = await Horoscope.findOne({
    where: { sign, date: new Date() },
  });

  if (dbHoroscope) {
    console.log("b", dbHoroscope);
    return dbHoroscope;
  } else {
    //Go fetch the sign
    const response = await fetch(`https://ohmanda.com/api/horoscope/${sign}`);
    const result = await response.json();
    console.log("c", result);
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

exports.determineSign = function determineSign({ month, date }) {
  if (month === 1) {
    if (date <= 19) {
      return "Capricorn";
    } else {
      return "Aquarius";
    }
  } else if (month === 2) {
    if (date <= 18) {
      return "Aquarius";
    } else {
      return "Pisces";
    }
  } else if (month === 3) {
    if (date <= 20) {
      return "Pisces";
    } else {
      return "Aries";
    }
  } else if (month === 4) {
    if (date <= 19) {
      return "Aries";
    } else {
      return "Taurus";
    }
  } else if (month === 5) {
    if (date <= 20) {
      return "Taurus";
    } else {
      return "Gemini";
    }
  } else if (month === 6) {
    if (date <= 20) {
      return "Gemini";
    } else {
      return "Cancer";
    }
  } else if (month === 7) {
    if (date <= 22) {
      return "Cancer";
    } else {
      return "Leo";
    }
  } else if (month === 8) {
    if (date <= 22) {
      return "Leo";
    } else {
      return "Virgo";
    }
  } else if (month === 9) {
    if (date <= 22) {
      return "Virgo";
    } else {
      return "Libra";
    }
  } else if (month === 10) {
    if (date <= 22) {
      return "Libra";
    } else {
      return "Scorpio";
    }
  } else if (month === 11) {
    if (date <= 21) {
      return "Scorpio";
    } else {
      return "Sagittarius";
    }
  } else if (month === 12) {
    if (date <= 21) {
      return "Sagittarius";
    } else {
      return "Capricorn";
    }
  }
};
