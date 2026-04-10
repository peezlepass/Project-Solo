const fetch = require("node-fetch-commonjs");
const db = require("../db/models");
const { Horoscope } = require("../db/models");
const user = require("../db/models/user");

const username = '625502';
const password = process.env.ASTROLOGY_API_KEY;
console.log(username, password)

// Encode the credentials in base64
const auth = Buffer.from(`${username}:${password}`).toString('base64');

const headers = {
  'Authorization': `Basic ${auth}`
};

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

  const datesWithData = [
    '2023-08-30',
    '2023-08-31',
    '2023-09-01',
    '2023-09-02',
    '2023-09-03',
    '2023-09-04',
    '2023-09-05',
    '2023-09-06',
    '2023-09-07',
    '2023-09-08',
    '2023-09-09',
    '2023-09-10',
    '2023-09-11',
  ]
  const index = new Date().getDate()

  const dbHoroscope = await Horoscope.findOne({
    where: { sign, date: new Date(datesWithData[index % datesWithData.length]) },
  });

  if (dbHoroscope) {
    return dbHoroscope;
  } else {
    return 'Loading...'
    //Go fetch the sign
    // const response = await fetch(`https://json.astrologyapi.com/v1/sun_sign_prediction/daily/${sign}`, { method: 'POST', headers });
    // const result = await response.json()

    // console.log(result)

    // const data = {
    //   sign: result.sun_sign,
    //   date: new Date(result.prediction_date.split('-').reverse().join('-')),
    //   horoscope: result.prediction.personal_life,
    // }

    // console.log(data)
    
    // return await Horoscope.create(data);
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
