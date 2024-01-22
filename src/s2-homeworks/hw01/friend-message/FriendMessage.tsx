import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";
import {Message} from "../components/Message";
import {MessageBackground} from "../components/MessageBackground";
import {AvavtarWrap} from "../message/Message";
import {Avatar} from "@mui/material";

type FriendMessagePropsType = {
    message: MessageType
}

const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <AvavtarWrap friendWrap>
                <Avatar
                    id={'hw1-friend-avatar-' + props.message.id}
                    className={s.friendAvatar}
                    // создаёт студент
                    src={props.message.user.avatar}
                    //
                />
                <div  id={'hw1-friend-time-' + props.message.id}
                      className={s.friendTime}

                >
                    {/*создаёт студент*/}
                    {props.message.message.time}
                    {/**/}
                </div>
            </AvavtarWrap>
            <MessageBackground bgcColor={'#F5F7FB'} friendStyle>
                <div className={s.friendImageAndText}>

                    <div className={s.friendText} >
                        <div
                            id={'hw1-friend-name-' + props.message.id}
                            className={s.friendName}
                        >
                            {/*создаёт студент*/}
                            {props.message.user.name}
                            {/**/}
                        </div>
                        <pre
                            id={'hw1-friend-text-' + props.message.id}
                            className={s.friendMessageText}
                        >
                        {/*создаёт студент*/}
                            {props.message.message.text}
                            {/**/}
                    </pre>
                    </div>
                </div>
            </MessageBackground>

        </div>
    )
}

export default FriendMessage
