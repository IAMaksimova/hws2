import React from 'react';
import border from '../messageborder.svg'
import {Avatar} from "@mui/material";

type MessageBorderPropsType = {
    borderId: string
}
export const MessageBorderTest: React.FC<MessageBorderPropsType> = ({borderId}) => {
    return (
        <div>
            <svg width="567" height="100" viewBox="0 0 567 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${border}#${borderId}`}>
                    <div>hehehe</div>
                </use>
            </svg>
        </div>
    );
};

