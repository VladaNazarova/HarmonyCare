'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
   
    static associate(models) {
     this.belongsTo(models.User,{foreignKey:'user_id'})
     this.belongsTo(models.User, { foreignKey: 'doctor_id', as: 'Doctor' });
     this.belongsTo(models.Service, { foreignKey: 'service_id' });
    }
  }
  Order.init(
    {
      status: DataTypes.BOOLEAN,
      service_type: DataTypes.STRING,
      service_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      date: DataTypes.STRING,
      time: DataTypes.STRING,
      doctor_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Order'
    }
  );
  return Order;
};