const mongoose = require('mongoose');
const colors = require('colors');
colors.enable();

const connectDb = () => {
    mongoose
        .connect("mongodb://localhost/players", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(
            console.log(
                colors.rainbow(
                    `CONNECTION... HOST: ${mongoose.connection.host} DB${mongoose.connection.db}`
                )
            )
        );
};

module.exports = connectDb;