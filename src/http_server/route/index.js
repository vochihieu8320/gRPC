const BookRouter = require('./Book.route');

function route(app) {
    app.use('/books', BookRouter);
}


module.exports = route;