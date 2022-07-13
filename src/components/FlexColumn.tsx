import { FC, ReactNode } from "react";

interface IFlexColumnProps{
    children: ReactNode
    width?: number | string
    height?: number | string
    background?: string
    verticalAlign?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline"
    horizontalAlign?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
}

const FlexColumn:FC<IFlexColumnProps> = (props) => {
    const {
        children,
        width,
        height,
        background,
        verticalAlign,
        horizontalAlign
    } = props

    return(
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                margin: '5px',
                padding: '5px',
                width: width,
                height: height,
                background: background,
                alignItems: verticalAlign,
                justifyContent: horizontalAlign,
            }}
        >
            {children}
        </div>
    )
}

export default FlexColumn