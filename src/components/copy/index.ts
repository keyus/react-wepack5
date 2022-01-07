import React, { useCallback } from 'react';
import copy from 'copy-to-clipboard'

interface Props {
    text: string
    children: React.ReactElement
    onCopy?(text: string, result: any): void
}

/**
 * 复制内容
 */
export default (props: Props) => {
    const {
        text,
        children,
        onCopy,
        ...prop
    } = props;
    const elem = React.Children.only(children);
    const onClick = useCallback((event): void => {
        const result = copy(text);
        if (onCopy) {
            onCopy(text, result);
        }
        if (elem && elem.props && typeof elem.props.onClick === 'function') {
            elem.props.onClick(event);
        }
    }, [text]);

    return React.cloneElement(elem, {
        ...prop,
        onClick,
    });
}