import {Cart} from './cart';
import {Book} from './book';

describe('shopping cart', () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    })

    it('should have no books', () => {
        expect(cart.items.length).toEqual(0);
    })

    describe('when a book is added', () => {
        let book: Book;

        beforeEach(() => {
            book = { id: 1, title: 'book', author: 'writer' };
            cart.addBook(book);
        });

        it('should add the book', () => {
            expect(cart.items.length).toEqual(1);
        })
    })
})