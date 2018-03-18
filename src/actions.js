import BookShelfDispatcher from './dispatcher';
import ActionTypes from './action-types';
import { bookListStore } from './bookListStore';
import axios from 'axios';

export const getTitle = event => {
    const bookList = bookListStore.getState();
    axios.get('/api/books')
        .then(response => (
            response.data.map(book => (
                bookList.add(book)
            ))))
        .then(BookShelfDispatcher.dispatch({
        type: ActionTypes.GET_TITLE,
        payload: { bookList }
    }))
};