import { FC, ReactNode } from "react";

interface IFlexItemProps {
    children: ReactNode
    width?: number | string
    grow?: number | "inherit" | "initial" | "revert" | "revert-layer" | "unset"
    shrink?: number | "inherit" | "initial" | "revert" | "revert-layer" | "unset"
    margin?: number | string
    padding?: number | string
}

const FlexItem:FC<IFlexItemProps> = (props) => {
    const {
        children,
        width,
        grow,
        margin = '5px',
        padding,
        shrink
    } = props
    return (
        <div
            style={{
                width: width,
                margin: margin,
                padding: padding,
                flexGrow: grow,               
                flexShrink: shrink 
            }}
        >
            {children}
        </div>
    )
}

export default FlexItem