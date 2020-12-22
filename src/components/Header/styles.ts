import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export const Image = styled.img`
  width: 240px;
`

export const Title = styled.h1`
  font-size: 25px;
  color: #787878;
`

export const LinkText = styled(Link)`
  margin: 0 10px;
  font-size: 16px;
  text-decoration: none;
  color: #06C;

  &:hover {
    text-decoration: underline;
  }
`
