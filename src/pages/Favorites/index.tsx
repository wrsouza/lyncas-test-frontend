import React from 'react';
import Header from '~/components/Header'
import { Container, BookList } from './styles';
import Book from '../../components/Book'
import { useGlobal } from '../../contexts/global'
import { BookType } from '../../@types/context';

const Favorites: React.FC = () => {
  const { myFavorites } = useGlobal()
  return (
    <Container>
      <Header title="Meus Favoritos" />
      <BookList>
        {myFavorites.map((book: BookType) => (
          <Book key={book.id} item={book} />
        ))}
      </BookList>
    </Container>
  );
}

export default Favorites;
