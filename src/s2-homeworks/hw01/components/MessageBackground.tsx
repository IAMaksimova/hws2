import React, {ReactNode} from 'react';
import styled from "@emotion/styled";

type MessageBackgroundPropsType = {
    children: ReactNode
    bgcColor?: string
    friendStyle?: boolean
}
export const MessageBackground: React.FC<MessageBackgroundPropsType> = ({children, bgcColor, friendStyle}) => {
    return (
        <MainPart bgcColor={bgcColor} friendStyle={friendStyle}>
            {children}
        </MainPart>
    );
};
const MainPart = styled.div<MessageBackgroundPropsType>`
  //width: 527px;
  height: 60px;
  background: ${ props => props.bgcColor || '#06C'};
  filter: drop-shadow(0px 1px 2px rgba(29, 33, 38, 0.10)) drop-shadow(0px 5px 20px rgba(29, 33, 38, 0.03));
  position: relative;
  border-radius: 10px;
  text-align: right;
  padding: 8px;
  display: inline-block;
 // margin: 0 10px;

  //margin-right: 80px;

  &::before{
    content: '';
    position: absolute;
    border: 13px solid transparent; 
    border-bottom:  11px solid ${props => props.friendStyle ? '#F5F7FB' : '#06C'};
    border-left: 8px solid ${props => props.friendStyle ? '#F5F7FB' : '#06C'};
    right: ${props => props.friendStyle ? '376px' : '-12px'};
    bottom: 0;
    filter: drop-shadow(0px 1px 2px rgba(29, 33, 38, 0.10)) drop-shadow(0px 5px 20px rgba(29, 33, 38, 0.03));
    transform: ${props => props.friendStyle && 'rotateY(180deg)'};
  }
`