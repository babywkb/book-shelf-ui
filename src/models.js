class Book {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    setTitle(title) {
        return new Book(this.id, title);
    }
    static idGenerator = 0;
    static create(title) {
        return new Book(++Book.idGenerator, title);
    }
}

class BookList {
    constructor(list) {
        this.list = list;
    }
    static empty() {
        return new BookList([]);
    }
    add(book) {
        return new BookList([book, ...this.list]);
    }
    setDone(id, title) {
        return new BookList(this.list.map(book => {
            if (book.id === id) {
                return book.setTitle(title);
            }
            return book;
        }));
    }
}

export { Book, BookList };