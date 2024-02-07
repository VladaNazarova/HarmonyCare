'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {

    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    login: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'patient'
    },
    phone_number: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    specialization: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    experience: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: ''
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
