import React from 'react';
import { useGlobal } from '../../contexts/global';

import { Container, LoaderContainer, LoaderItem } from './styles';

const Loader: React.FC = () => {
  const { isLoaderVisible } = useGlobal()
  return (
    <Container isVisible={isLoaderVisible}>
      <LoaderContainer>
        <LoaderItem />
        <LoaderItem />
        <LoaderItem />
        <LoaderItem />
      </LoaderContainer>
    </Container>
  );
}

export default Loader;
