import React, { useState } from 'react';
import Swal from 'sweetalert2'

import api from '~/services/api'

import { useGlobal } from '../../contexts/global'
import { Container, Input, Btn, BtnIcon } from './styles';

const SearchForm: React.FC = () => {
  const [inputSearch, setInputSearch] = useState('')
  const { setIsLoaderVisible, setBooks } = useGlobal()

  const changeInput = (event: any) => {
    setInputSearch(event.target.value)
  }

  const searchApi = (event: any) => {
    event.preventDefault()
    if (!inputSearch) {
      Swal.fire('Atenção', 'É necessário preecher o campo da pesquisa!', 'warning')
      return
    }
    getApiData()
  }

  const getApiData = async () => {
    try {
      setIsLoaderVisible(true)
      const url = `google-books?search=${encodeURIComponent(inputSearch)}`
      const response = (await api.get(url)).data;
      setBooks(response.data)
      setIsLoaderVisible(false)
    } catch (err) {
      setIsLoaderVisible(false)
      Swal.fire('Erro', 'Ocorreu um erro, por favor tente novamente!', 'error')
      console.log(err)
    }
  }

  return (
    <Container onSubmit={searchApi}>
      <Input onKeyUp={changeInput} />
      <Btn onClick={searchApi}>
        <BtnIcon size={18} />
      </Btn>
    </Container>
  );
}

export default SearchForm;
