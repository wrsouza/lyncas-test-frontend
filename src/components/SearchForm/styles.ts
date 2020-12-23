import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const Container = styled.form`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  max-width: 600px;
  width: 100%;
  height: 50px;
  padding-left: 10px;
  line-height: 50px;
  font-size: 18px;
  color: #06C;
  border-radius: 5px 0 0 5px;
  border: 1px solid #ccc;
  outline: 0px;
  background-color: #f5f5f5;
  
  &::placeholder {
    color: #aaa;
  }

  &:focus {
    background-color: rgba(0, 100, 200, 0.05);
    border: 1px solid rgba(0, 100, 200, 0.5);
  }
`

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 0 5px 5px 0;
  color: #06C;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
    color: #333;
  }
`

export const BtnIcon = styled(FaSearch)``
