/* eslint-disable no-unused-vars */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {}
  }
  Service.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      promo: DataTypes.STRING,
      logo: DataTypes.STRING,
      img: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Service'
    }
  );
  return Service;
};
