"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Horoscope extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Horoscope.init(
    {
      sign: DataTypes.STRING,
      date: DataTypes.DATEONLY,
      horoscope: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Horoscope",
    }
  );
  return Horoscope;
};
