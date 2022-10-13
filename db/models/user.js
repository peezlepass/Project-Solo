"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            msg: "Provide a name.",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: "Provide a valid email.",
          },
        },
      },
      password: DataTypes.STRING,
      lat: DataTypes.DECIMAL,
      lng: DataTypes.DECIMAL,
      date: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
          min: 1,
          notEmpty: {
            msg: "Provide a day.",
          },
          isDayOfMonth(value) {
            if ([4, 6, 9, 11].includes(+this.month) && +value > 30) {
              throw new Error("Incorrect date.");
            } else if (+this.month === 2 && +value > 29) {
              throw new Error("Incorrect date.");
            } else if (+value > 31) {
              throw new Error("Incorrect date.");
            }
          },
        },
      },
      month: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
          min: 1,
          max: 12,
          notEmpty: {
            msg: "Provide a month.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
