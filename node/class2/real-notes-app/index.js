const {app} = require('./app');
const chalk = require('chalk');
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://vijay:TUfMS1oRIdKKxigK@testcluster.jdbns.mongodb.net/jsDB?retryWrites=true&w=majority";
const start = async () => {

    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Connected to database');
    } catch (err) {
        console.error(err);
    }

    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(chalk.green(`Server started at ${PORT}`));
    });
}
start();