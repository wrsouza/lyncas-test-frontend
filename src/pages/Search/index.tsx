import React, { useState } from 'react'
import Header from '~/components/Header'
import SearchForm from '~/components/SearchForm'
import { BookType } from '../../@types/context'
import Book from '../../components/Book'
import { useGlobal } from '../../contexts/global'

import { Container, BookList } from './styles'

const Search: React.FC = () => {
  const { books } = useGlobal()
  return (
    <Container>
      <Header title="Consulta de Livro" />
      <SearchForm />
      <BookList>
        {books.map((book: BookType) => (
          <Book key={book.id} item={book} />
        ))}
      </BookList>
    </Container>
  );
}

export default Search;
