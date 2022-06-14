const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://zack:zack1234@nodeproject.75falji.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = connect;