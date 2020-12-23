import styled from 'styled-components';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type ContainerPropsType = {
  isVisible: boolean
  isActive: boolean
}

export const Container = styled.li`
  display: ${(props: ContainerPropsType) => props.isVisible ? 'block' : 'none'};
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0px;
  padding: 0;
  border-radius: 3px;
  margin: 0 2px;
  cursor: pointer;

  background-color: ${(props: ContainerPropsType) => props.isActive ? 'rgba(28,124,213,.2)' : 'none'};
  border: ${(props: ContainerPropsType) => props.isActive ? '1px solid #06c' : '1px solid #ccc'};
  z-index: ${(props: ContainerPropsType) => props.isActive ? 2 : 1};
  color: ${(props: ContainerPropsType) => props.isActive ? '#ffffff' : '#06C'};

  &:hover {
    background-color: rgba(28,124,213,.2);
  }  
`

export const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #06c;
  text-decoration: none;
`

export const BtnText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: '#666';
  text-decoration: none;
`

export const BtnIconLeft = styled(FaAngleLeft).attrs({
  color: '#06C',
  size: 16
})``

export const BtnIconRight = styled(FaAngleRight).attrs({
  color: '#06C',
  size: 16
})``
