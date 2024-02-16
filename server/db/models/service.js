/* eslint-disable no-unused-vars */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {this.hasMany(models.Order, { foreignKey: 'service_id' });}
  }
  Service.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      promo: DataTypes.STRING,
      price: DataTypes.STRING,
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
