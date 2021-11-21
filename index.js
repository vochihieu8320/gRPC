const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const BookController = require('./src/controller/book.controller');
const db = require('./src/db/db')

//load protocol buffer define

const packageDefinition = protoLoader.loadSync('./message.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});


const todoPackageDefinition = grpc.loadPackageDefinition(packageDefinition).todo;

const server = new grpc.Server();
server.addService(todoPackageDefinition.BookService.service, {
    getBooks: BookController.getList,
    createBooks: BookController.addBook
});


server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
console.log('Server running at http://127.0.0.1:50051');
db();
server.start();