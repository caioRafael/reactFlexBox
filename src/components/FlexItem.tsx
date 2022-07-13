import { FC, ReactNode } from "react";

interface IFlexItemProps {
    children: ReactNode
    width?: number | string
}

const FlexItem:FC<IFlexItemProps> = (props) => {
    const {
        children,
        width = "100%"
    } = props
    return (
        <div
            style={{
                width: width,
            }}
        >
            {children}
        </div>
    )
}

export default FlexItem