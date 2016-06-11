import {Book} from './book';

export class Cart{
    items: Array<any>;

    constructor(){
        this.items = [];
    }

    addBook(book: Book){
        this.items.push(book);
    }
}