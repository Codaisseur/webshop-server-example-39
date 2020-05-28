"use strict";
module.exports = (sequelize, DataTypes) => {
  const orderProduct = sequelize.define(
    "orderProduct",
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {}
  );
  orderProduct.associate = function (models) {
    orderProduct.belongsTo(models.order);
    orderProduct.belongsTo(models.product);
  };
  return orderProduct;
};
