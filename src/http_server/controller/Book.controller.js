//add bookservice

// we call bookservice to perform crud 

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const BookModel  = require('../../model/book.model')
const packageDefinition = protoLoader.loadSync(`${__dirname}../../../../message.proto`, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const todoPackageDefinition = grpc.loadPackageDefinition(packageDefinition).todo;

const bookService = new todoPackageDefinition.BookService(
    'localhost:50051',
    grpc.credentials.createInsecure(),
);

class BookController {
   async getList(req, res) {
        try {
            const result = await bookService.getBooks({})
            res.json({status: 200, data: result})
        } catch (error) {

            res.status(500)
        }  
            
        
    }
    addBook(req, res) {
        let id = Math.floor(Math.random() * 1000000) + 1;
        id = id.toString();
            const body = {
                id : id,
                name: req.body.name, 
                author: req.body.author,
                type_id: req.body.type_id,
            }
            
            bookService.createBooks(body, (err)=>{
                if(err) {
                    console.log(err);
                    res.status(500)
                }
                else
                {
                    res.json({status: 200});
                }
            });
            
        
    }
   

}



module.exports = new BookController
