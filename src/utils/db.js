const mongoose = require('mongoose');


export GET = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("db connected");
    } catch (err) {
        throw new Error("db connection failed")
    }

}