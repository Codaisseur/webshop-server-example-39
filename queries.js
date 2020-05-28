const User = require("./models").user;
const Product = require("./models").product;
const Order = require("./models").order;
const OrderProducts = require("./models").orderProduct;

const getProductsForOrderId = async id => {
  try {
    const order = await Order.findByPk(id, {
      include: [Product],
    });
    console.log(order.get({ plain: true }));
  } catch (e) {
    console.log(e);
  }
};

const productsForUser = async id => {
  const user = await User.findByPk(id, {
    include: [{ model: Order, include: [Product] }],
  });
  console.log(user.get({ plain: true }).orders[1].products);
};

// POST /order

const createOrder = async (productIds, userId) => {
  // some productIds = [1, 2, 4, ..., ...]
  try {
    const newOrder = await Order.create({ userId, shipped: false });
    console.log("newOrder", newOrder.get({ plain: true }));
    const newOrderId = newOrder.id;

    const productAndOrder = productIds.map(p => ({
      orderId: newOrderId,
      productId: p,
    }));

    const bulkOrderProducts = await OrderProducts.bulkCreate(productAndOrder);

    console.log("order products", bulkOrderProducts);
  } catch (e) {
    console.log(e);
  }

  // userId => whos making the order
};

createOrder([2, 5, 3], 2);

// getProductsForOrderId(1);
