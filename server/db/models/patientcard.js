'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientCard extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  PatientCard.init(
    {
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      gender: DataTypes.ENUM('male', 'female'),
      health_issues: DataTypes.STRING,
      analyses_result: DataTypes.STRING,
      treatment: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'PatientCard'
    }
  );
  return PatientCard;
};
