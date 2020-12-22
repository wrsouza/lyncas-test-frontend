import React from 'react';

import { Container, Image, Title, LinkText } from './styles';

type HeaderType = {
  title: string
}

const Header: React.FC<HeaderType> = ({ title }) => {
  return (
    <>
      <Container>      
        <Image
          src="https://img-dev.feedback.house/TCo5z9DrSyX0EQoakV8sJkx1mSg=/fit-in/300x300/smart/https://s3.amazonaws.com/feedbackhouse-media-development/modules%2Fcore%2Fcompany%2F5c9e1b01c5f3d0003c5fa53b%2Flogo%2F5c9ec4f869d1cb003cb7996d"
          alt="Lyncas Test Frontend"
        />
        <Title>{ title }</Title>
      </Container>  
      <Container>
        <LinkText to={`/`}>Pesquisar</LinkText>
        <LinkText to={`/favorites`}>Meus Favoritos</LinkText>
      </Container>
    </>
  );
}

export default Header;
