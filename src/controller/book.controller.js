const db = require('../db/Book.db')

class BookController{
    getList(call) {
        return new Promise(async(resolve, reject)=>{
            try {
                const result = await db.getAllBooks();
                resolve(result);
            } catch (error) {
                console.log(error)
                reject(error);
            }
        })
    }

    async addBook(call, callback) {  
        const book = call.request;
        console.log("book", book)
        db.addBook(book)
            .then(res => {
                console.log(res)
                callback(res)
            })
            .catch(err => {
                callback(err)
            })
    }

}


module.exports = new BookController;



