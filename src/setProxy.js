const proxy = require('http-proxy-middleware');


module.exports = function(app){
    app.use(
        proxy('./api', {
            target : 'http://3.21.105.37:3002/'
        })
    );

}