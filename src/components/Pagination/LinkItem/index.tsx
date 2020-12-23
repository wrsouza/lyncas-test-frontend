import React from 'react';
import Swal from 'sweetalert2'

import { useGlobal } from '../../../contexts/global';
import api from '../../../services/api';

import { Container, Btn, BtnText, BtnIconLeft, BtnIconRight } from './styles';

type LinkItemPropsType = {
  isVisible: boolean
  isActive: boolean
  title: string  
  iconName?: string
  pageNumber: number
}

const LinkItem: React.FC<LinkItemPropsType> = ({ title, isVisible, isActive, iconName, pageNumber }) => {
  const { search, setBooks, setCurrentPage, setTotalPage, setIsLoaderVisible } = useGlobal()
  const clickPage = () => {
    if (!isActive) {
      getApiData()
    }
  }

  const getApiData = async () => {
    try {
      setIsLoaderVisible(true)
      const url = `google-books?search=${encodeURIComponent(search)}&page=${pageNumber}`
      const response = (await api.get(url)).data;
      setBooks(response.data)
      setCurrentPage(response.current_page)
      setTotalPage(response.last_page)
      setIsLoaderVisible(false)
    } catch (err) {
      setIsLoaderVisible(false)
      Swal.fire('Erro', 'Ocorreu um erro, por favor tente novamente!', 'error')
      console.log(err)
    }
  }

  return (
    <Container isVisible={isVisible} isActive={isActive}>
      <Btn title={title} onClick={clickPage}>
        {iconName ? ((iconName === 'left') ? (<BtnIconLeft />) : (<BtnIconRight />))
          : (
            <BtnText>{pageNumber}</BtnText>       
          )}
      </Btn>      
    </Container>
  );
}

export default LinkItem;
