import styled from 'styled-components';
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  width: 250px;
  padding: 10px 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 100, 200, 0.1);
  }
`;

export const Image = styled.img`
  max-width: 240px;
  max-height: 240px;
`
export const Title = styled.h1`
  margin: 10px 0;
  font-size: 16px;
  color: #06C;
  text-align: center;
`

export const Authors = styled.span`
  font-size: 11px;
  color: #aaa;
`

export const Published = styled.span`
  margin: 3px 0;
  font-size: 10px;
  color: #666;
`

export const Description = styled.p`
  margin: 10px 0;
  font-size: 13px;
  color: #666;
`

type BtnPropsType = {
  isAdd: boolean
}

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 7px 0;
  font-size: 13px;
  color: #fff;
  background: ${(props: BtnPropsType) => props.isAdd ? '#06C' : '#c70000'};
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const IconMinus = styled(FaMinusCircle).attrs({
  color: '#fff',
  size: 14
})`
  margin-right: 5px;
`

export const IconPlus = styled(FaPlusCircle).attrs({
  color: '#fff',
  size: 14
})`
  margin-right: 5px;
`
