import { ReduceStore } from 'flux/utils';
import ActionTypes from './action-types';
import TodoDispatcher from './dispatcher';
import axios from 'axios';
import { Book, BookList } from './models';


class BookListStore extends ReduceStore {
    getInitialState() {
        const bookList = BookList.empty();
        axios.get('/api/books').then(response => (
            response.data.map(book => (
                bookList.add(Book.create(book.title))
            ))
        ));
        console.log(bookList);
        return bookList;
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.UPDATE_TITLE: {
                const { title } = payload;
                return title;
            }
            case ActionTypes.ADD_BOOK: {
                return '';
            }
            default:
                return state;
        }
    }
}

export const bookListStore = new BookListStore(TodoDispatcher);