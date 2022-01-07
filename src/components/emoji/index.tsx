
import React, { useCallback, useEffect } from 'react';
import { Popover,  } from 'antd';
import data from './data.json'
import './index.less'


interface Props {
    children: React.ReactElement
    onSelect?: <T>(key: T) => any
}

const emojiData: any = Object.entries(data.emojis);
const EmojiPicker = (props: Props): React.ReactElement => {
    const {
        children,
        onSelect,
    } = props;

    const onClick = useCallback((emoji: any) => () => {
        console.log(emoji)
        emoji = {
            key: emoji[0],
            code: emoji[1].code,
            value: emoji[1].value,
        }
        onSelect && onSelect(emoji);
    }, []);

    return (
        <Popover
            content={
                <ul className='emoji-wrapper'>
                    {
                        emojiData.map((it: [a: string, b: { code: string, value: string }]) => {
                            return (
                                <li
                                    className='emoji-native'
                                    key={it[0]}
                                    onClick={onClick(it)}
                                >
                                    {/* <Tooltip title={it[0]}> */}
                                    <span>{it[1].value}</span>
                                    {/* </Tooltip> */}
                                </li>
                            )
                        })
                    }
                </ul>
            }
            title={null}
            placement='top'
            overlayClassName='emoji-modal'
            trigger="click"
        >
            {children}
        </Popover>
    )
}
export default EmojiPicker;