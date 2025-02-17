async function notifyUser(req, res) {

    try {
        const { userId, orderDetails } = req.body;

        if (!userId || !orderDetails) {
            res.status(400).json({ message: "data is not present" });
        }

        return res.status(200).json({ message: "User notified successfully" });
    }
    catch (err) {
        console.error(err);

        return res.status(500).json({ message: "Internal server error" });
    }

}

module.exports = { notifyUser };