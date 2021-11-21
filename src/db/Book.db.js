const BookModel = require('../model/book.model');

class BookDB{
  getAllBooks(){
    return new Promise(async(resolve, reject)=>{
        try {
           
            const result = await BookModel.find();
            resolve(result);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
  }
  getBooks(id){
    return new Promise(async(resolve, reject)=>{
        try {
            const result = await BookModel.findById(id);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    })
  }
  addBook(book){
      return new Promise(async(resolve, reject)=>{
          try {
              const result = await BookModel.create(book);
              console.log(result);
              resolve(book);
          } catch (error) {
              console.log(error);
              reject(error);
          }
      })
  }
  updateBook(book){

  }
  deleteBook(id){
    return new Promise(async(resolve, reject)=>{
        try {
            await BookModel.deleteById(id);
            resolve(true)
        } catch (error) {
            reject(error);
        }
    })
  }
}


module.exports = new BookDB