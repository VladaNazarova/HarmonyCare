'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.PatientCard, { foreignKey: 'user_id' });
       this.hasMany(models.Order, { foreignKey: 'user_id' });
       this.hasMany(models.Order, { foreignKey: 'doctor_id' });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      login: DataTypes.STRING,
      password: DataTypes.STRING,
      phone_number: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.ENUM('patient', 'doctor', 'admin'),
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
      },
      doctor_id: {
        type: DataTypes.INTEGER,
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
