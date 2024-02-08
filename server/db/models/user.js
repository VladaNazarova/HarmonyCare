'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      this.hasOne(models.PatientCard, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      login: DataTypes.STRING,
      password: DataTypes.STRING,
      phone_number: DataTypes.INTEGER,
      role: {
        type: DataTypes.ENUM('patient', 'doctor'),
        allowNull: false,
        defaultValue: 'patient'
      },
      specialization: {
        type: DataTypes.STRING,
        allowNull: true
      },
      experience: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};
