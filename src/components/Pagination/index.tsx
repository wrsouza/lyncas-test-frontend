import React, { useState, useEffect } from 'react';
import { useGlobal } from '../../contexts/global';

import LinkItem from './LinkItem'
import { Container, List } from './styles';

const Pagination: React.FC = () => {
  const [pages, setPages] = useState<number[]>([])
  const { current_page, total_page } = useGlobal()

  const prevPageVisible = (): boolean => {
    return !(current_page - 1 < 1)
  }

  const nextPageVisible = (): boolean => {
    return !(current_page + 1 > total_page)
  }

  const isActive = (page: number): boolean => {
    return current_page === page
  }

  useEffect(() => {
    const getPages = () => {
      const first_page = 1
      const last_page = total_page
      const prev_page = current_page - 4 < first_page ? first_page : current_page - 4
      const next_page = current_page + 4 > last_page ? last_page : current_page + 4
      const numbers = []
      for (let i = prev_page; i <= next_page; i++) {
        numbers.push(i)
      }
      setPages(numbers)
    }
    getPages()
  }, [current_page, total_page])


  return (
    <Container>
      <List>
        <LinkItem
          isVisible={prevPageVisible()}
          isActive={false}
          title="Página Anterior" 
          iconName="left"
          pageNumber={current_page -1}
          />
        {pages.map((page: number) => (
          <LinkItem
            key={page}
            isVisible={true}
            isActive={isActive(page)}
            title={page.toString()}
            pageNumber={page}
            />
          ))}
        <LinkItem
          isVisible={nextPageVisible()}
          isActive={false}
          title="Próxima Página" 
          iconName="right"
          pageNumber={current_page + 1}
          />
      </List>
    </Container>
  );
}

export default Pagination;
