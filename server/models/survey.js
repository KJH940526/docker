const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://wns312:wns312@cluster0-ptxu3.mongodb.net/test?retryWrites=true&w=majority')

const Surveyschema = mongoose.Schema({
    gender : String,
    animal : String
});

module.exports = mongoose.model('survey', Surveyschema);
