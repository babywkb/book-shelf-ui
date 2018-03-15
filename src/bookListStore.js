import { ReduceStore } from 'flux/utils';
import ActionTypes from './action-types';
import TodoDispatcher from './dispatcher';
import axios from 'axios';
import { Book, BookList } from './models';


class BookListStore extends ReduceStore {
    getInitialState() {
        return BookList.empty().add(Book.create('ほげ'));
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