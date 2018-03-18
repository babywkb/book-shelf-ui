import React from 'react';

import { getTitle } from './actions';
import { BookListComponent, BookComponent, GetTitleButton } from './components';

const App = (props) => (
    <div>
        <h1>本棚</h1>
        <BookListComponent>
            {props.bookList.list.map(book => (
                <BookComponent
                    key={book.id}
                    book={book} />
            ))}
        </BookListComponent>
        <GetTitleButton getTitle={getTitle} />
    </div>
);

export default App;
