module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("products", {
        product_id: {
            type: Sequelize.STRING,
        },
        product_name: {
            type: Sequelize.STRING,
        },
        product_description: {
            type: Sequelize.STRING,
        },
        product_img: {
            type: Sequelize.STRING,
        },
        product_qty: {
            type: Sequelize.INTEGER,
        },
        product_price: {
            type: Sequelize.INTEGER,
        }
    });
    // Above indicate the structure for the mysql Database

    return Products;
};