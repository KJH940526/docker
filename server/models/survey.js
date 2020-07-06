const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://JWTEX:TIGER@cluster0.wmtg0.mongodb.net/<dbname>?retryWrites=true&w=majority')

const Surveyschema = mongoose.Schema({
    gender : String,
    animal : String
});

module.exports = mongoose.model('survey', Surveyschema);
