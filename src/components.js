import React from 'react';

export const About = () => (
    <div>
        <h1>本のタイトル一覧を出す</h1>
        <p>https://github.com/babywkb/StudyAPI　のアプリを叩いて値を表示する</p>
    </div>
);

export const BookComponent = (props) => {
    const book = props.book;
    return (
        <li>
            <label>
                <span>#{book.id} {book.title}</span>
            </label>
        </li>
    );
};

export const BookListComponent = (props) => (
    <ul>
        <div>本のタイトル</div>
        {props.children}
    </ul>
);