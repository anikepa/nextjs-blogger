

import mongoose from 'mongoose'

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/blog2");
    } catch (error) {
        throw new Error("Connection failed!");
    }
};

export default connect;

