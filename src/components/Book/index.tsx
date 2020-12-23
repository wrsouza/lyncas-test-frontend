import React from 'react';
import { BookType } from '../../@types/context';
import { useGlobal } from '../../contexts/global';
import Swal from 'sweetalert2'

import { 
  Container, 
  Image, 
  Title, 
  Authors, 
  Published, 
  Description, 
  Btn, 
  IconMinus, 
  IconPlus 
} from './styles';

type BookPropsType = {
  item: BookType
}

type SwalConfirmationType = {
  title: string
  text: string
  type: string
  showCancelButton: boolean
  confirmButtonColor: string
  confirmButtonText: string
  cancelButtonColor: string
  cancelButtonText: string
}

const Book: React.FC<BookPropsType> = ({ item }) => {
  const { myFavorites, setMyFavorites } = useGlobal()

  const getImageUrl = () => {
    if (!item.image_url) {
      return 'https://i.stack.imgur.com/y9DpT.jpg'
    }
    return item.image_url
  }

  const getTitle = () => {
    if (item.title.length > 40) {
      return `${item.title.substr(0, 37)}...`
    }
    return item.title
  }

  const getDescription = () => {
    if (item.description.length > 100) {
      return `${item.description.substr(0, 97)}...`
    }
    return item.description
  }

  const checkIfHasInFavorites = () => {
    return myFavorites.filter((i: BookType) => i.id === item.id).length
  }

  const addFavorites = () => {
    const favorites = [
      ...myFavorites,
      item
    ]
    saveInLocalStorage(favorites)
    setMyFavorites(favorites)
  }

  const remFavorites = () => {
    const params: SwalConfirmationType = {
      title: 'Atenção',
      text: 'Deseja Realmente remover esse livro?',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#c70000',
      confirmButtonText: 'Sim, Remover',
      cancelButtonColor: '#1C7CD5',
      cancelButtonText: 'Não',
    }
    
    Swal.fire(params).then((result: any) => {
      if (result.value) {
        const favorites = myFavorites.filter((i: BookType) => i.id !== item.id)
        saveInLocalStorage(favorites)
        setMyFavorites(favorites)
      }
    });    
  }

  const saveInLocalStorage = (favorites: BookType[]) => {
    localStorage.setItem('myfavorites', JSON.stringify(favorites))
  }

  return (
    <Container>
      <Image src={getImageUrl()} alt={item.title} />
      <Title>{getTitle()}</Title>
      {item.authors ? (<Authors>Autor: {item.authors}</Authors>) : null}
      {item.published_at ? (<Published>Publicado em {item.published_at}</Published>) : null}
      <Description>{getDescription()}</Description>
      {checkIfHasInFavorites() ? 
        (<Btn onClick={remFavorites} isAdd={false} title="Remover dos Favoritos"><IconMinus /> Favoritos</Btn>) : 
        (<Btn onClick={addFavorites} isAdd={true} title="Adicionar aos Favoritos"><IconPlus /> Favoritos</Btn>)}
    </Container>
  );
}

export default Book;
