import React from 'react';

import { BookListComponent, BookComponent } from './components';

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
    </div>
);

export default App;
