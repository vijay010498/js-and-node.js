const {app} = require('./app');
const chalk = require('chalk');

const start = async () =>{
    const PORT = 5000;
    app.listen(PORT, () =>{
        console.log(chalk.green(`Server started at ${PORT}`));
    });
}
start();