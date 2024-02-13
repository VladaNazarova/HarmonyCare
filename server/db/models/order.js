'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.belongsTo(models.User,{foreignKey:'user_id'})
     this.belongsTo(models.User, { foreignKey: 'doctor_id' });
    }
  }
  Order.init(
    {
      order_name: DataTypes.STRING,
      service_type: DataTypes.STRING,
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