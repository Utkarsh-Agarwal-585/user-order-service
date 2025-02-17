// const storeOrder = require('../service/order.service');

async function createOrder(req, res) {
    try {
        const orderData = req.body;
        if (!orderData) {
            return res.status(400).json({ message: "Order is required" });
        }
        // const orderData = await storeOrder(JSON.stringify(data));

        const userNotifiedData = {
            userId: orderData.userId,
            orderDetails: orderData.orderDetails
        }

        console.log(JSON.stringify(userNotifiedData));

        const notifyResponse = await fetch('http://localhost:3001/notify', {
            method: 'POST',
            body: JSON.stringify(userNotifiedData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const resData = await notifyResponse.json();
        console.log(resData);
        return res.status(201).json({ data: "Created: Order placed and user notified" });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { createOrder }