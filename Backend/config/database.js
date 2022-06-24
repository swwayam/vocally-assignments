const mongoose = require('mongoose')

exports.connect = () => {
    mongoose.connect('mongodb://localhost:27017/openauto', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log(`Database Connected`))
    .catch((error) => {
        console.log(`Database not connected`);
        console.log(error);
        process.exit(1)
    })
}