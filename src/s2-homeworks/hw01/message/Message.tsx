import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";
import {Avatar} from "@mui/material";
import {Name} from "../components/Message";
import styled from "@emotion/styled";
import {MessageBackground} from "../components/MessageBackground";
import {FlexWrapper} from "../components/FlexWrapper";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

type StyledMessagePropsType = {
    justify?: string
}

type AvatarWrapPropsType = {
    friendWrap? : boolean
}
// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {



    return (
        <StyledMessage id={'hw1-message-' + props.message.id} className={s.message}>
            <FlexWrapper align={'center'}>

                <MessageBackground>
                    <div className={s.imageAndText}>
                        <div className={s.text}>
                            <Name id={'hw1-name-' + props.message.id} className={s.name}>
                                {/*создаёт студент*/}
                                {props.message.user.name}
                                {/**/}
                            </Name>
                            <pre id={'hw1-text-' + props.message.id} className={s.messageText} >
                        {/*создаёт студент*/}
                                {props.message.message.text}
                                {/**/}
                    </pre>
                        </div>
                    </div>
                </MessageBackground>

                <AvavtarWrap>
                    <Avatar
                        className={s.avatar}
                        id={'hw1-avatar-' + props.message.id}
                        src={props.message.user.avatar}
                        // создаёт студент
                    />
                    <div id={'hw1-time-' + props.message.id} className={s.time}>
                        {/*создаёт студент*/}
                        {props.message.message.time}
                        {/**/}
                    </div>
                </AvavtarWrap>
            </FlexWrapper>
        </StyledMessage>
    )
}
export default Message;


export const StyledMessage = styled.div<StyledMessagePropsType>`
  display: flex;
  justify-content: ${props => props.justify || 'flex-end'};
  //grid-template-columns: 100%;
  //grid-template-rows: 100%;
`

export const AvavtarWrap = styled.div<AvatarWrapPropsType>`
  margin: 0;
  padding: 0;
  display: inline-block;
  transform: translateY(45%) ${props => props.friendWrap ? 'translateX(-10%)' : ' translateX(10%)'};
`