import { ReduceStore } from 'flux/utils';
import ActionTypes from './action-types';
import BookShelfDispatcher from './dispatcher';
import { Book, BookList } from './models';


class BookListStore extends ReduceStore {
    getInitialState() {
        const bookList = BookList.empty();
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
            case ActionTypes.GET_TITLE: {
                const { bookList } = payload;
                return bookList;
            }
            default:
                return state;
        }
    }
}

export const bookListStore = new BookListStore(BookShelfDispatcher);