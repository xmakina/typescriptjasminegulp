import {Book} from './book';

describe('Book', () => {
    let book: Book;
    const title = 'Alice in Wonderland';
    const id = 44;
    const author = 'Lewis Carroll';

    beforeEach(() => {
        book = { id: id, title: title, author: author };
    });

    it('should have a title', () => {
        expect(book.title).toEqual(title);
    });

    it('should have an id number', () => {
        expect(book.id).toEqual(id);
    });

    it('should have an author', () => {
        expect(book.author).toEqual(author);
    })
})