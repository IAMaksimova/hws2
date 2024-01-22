import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import {Container} from "./components/Container";
import {FlexWrapper} from "./components/FlexWrapper";

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: UserType
    message: MessageTextType
}

type UserType = {
    avatar: string
    name: string
}

type MessageTextType = {
    text: string
    time: string
}

// export type MessageStyle = {
//     color: string
//     fontFamily: string
//     fontSize: string
//     fontWeight: number
//     lineHeight: string
// }
// export type TimeStyle = MessageType & { marginLeft: string }

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Bread Pitt',  // можно менять
    },
    message: {
        text: 'Hello, she didn’t do anything and rested all day, how are you?', // можно менять
        time: '22:00', // можно менять
    }
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Butter Pitt', // можно менять
    },
    message: {
        text: 'зеркальное сообщение для тренировки css', // можно менять
        time: '22:00', // можно менять
    },
}



const HW1 = () => {

    return (
        <div id={'hw1'}>
            <Container>
                    <span className={s2.hwTitle}>Hometask № 1</span>
                    <hr/>
                <div className={s2.hw}>

                        <Message message={message0}/>
                        <FriendMessage message={friendMessage0}/>
                        {/*для автоматической проверки дз (не менять)*/}
                        <MessageSender M={Message}/>
                    {/*проверка отображения (не менять)*/}
                </div>
                <hr style={{marginTop: '32px'}}/>
            </Container>
        </div>
    )
}

export default HW1
