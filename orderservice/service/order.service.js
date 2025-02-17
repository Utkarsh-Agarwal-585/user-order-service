const fs = require('fs');
const path = require('path');

function storeOrder(orderData) {

    if (!orderData) {
        throw new Error('OrderData is required');
    }

    const filePath = path.join(__dirname, '../data/order.txt');

    fs.writeFile(filePath, orderData, (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("Order data stored successfully");
        }
    });

    // fs.close('orderData', (err) => {
    //     if(err){
    //         return err;
    //     }
    // })
}

module.exports = storeOrder;
