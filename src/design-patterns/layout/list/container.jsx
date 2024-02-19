import React from 'react';
import RegularList from './regular-list';
import SmallAuthorListItem from './authors/small-list-item';
import LastAuthorListItem from './authors/large-list-item';
import NumberList from './number-list';
import LargeBookList from './books/large-book-item';
import SmallBookList from './books/small-book-item';

const ItemContainer = () => {
  return (
    <section className="flex flex-col gap-5">
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={LastAuthorListItem}
      />
      <NumberList
        items={books}
        sourceName="book"
        ItemComponent={LargeBookList}
      />
      <NumberList
        items={books}
        sourceName="book"
        ItemComponent={SmallBookList}
      />
    </section>
  );
};

export default ItemContainer;

const authors = [
  {
    name: 'John Doe',
    age: 45,
    country: 'USA',
    books: ['book1', 'book2', 'book3'],
  },
  {
    name: 'Jane Doe23',
    age: 35,
    country: 'UK',
    books: ['book1', 'book2', 'book3'],
  },
  {
    name: 'John Doe21',
    age: 45,
    country: 'USA',
    books: ['book1', 'book2', 'book3'],
  },
];

const books = [
  {
    title: 'Book1',
    price: 45,
    pages: 300,
    name: '23',
  },
  {
    title: 'Book1',
    price: 45,
    pages: 300,
    name: '232',
  },
];
