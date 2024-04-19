const mongoose = require('mongoose');

module.exports = () => {
    // Set the strictQuery option to false to prepare for upcoming changes in Mongoose 7
    mongoose.set('strictQuery', false);

    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        const dbURI = 'mongodb+srv://gauravsatkar8806:lW61Q4zSD2TPPLIH@cluster0.kd7xw7g.mongodb.net/my_app?retryWrites=true&w=majority&appName=Cluster0';
        mongoose.connect(dbURI, connectionParams);
        console.log('Connected to the database successfully');
    } catch (error) {
        console.error('Could not connect to the database');
        console.error(error);
    }
};
