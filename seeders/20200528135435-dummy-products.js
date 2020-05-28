"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Lamp",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
        {
          name: "Desk",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2,
        },
        {
          name: "Chair",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2,
        },
        {
          name: "Couch",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
        {
          name: "Plant",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
