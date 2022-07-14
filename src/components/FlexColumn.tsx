import { FC, ReactNode } from "react";

type AlignItens = "stretch" | "flex-start" | "flex-end" | "center" | "baseline"
type JustifyContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse'
interface IFlexColumnProps{
    children: ReactNode
    width?: number | string
    height?: number | string
    background?: string
    wrap?: Wrap
    verticalAlign?: AlignItens
    horizontalAlign?: JustifyContent
}

const FlexColumn:FC<IFlexColumnProps> = (props) => {
    const {
        children,
        width,
        height,
        background,
        verticalAlign,
        horizontalAlign,
        wrap,
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
                flexWrap: wrap
            }}
        >
            {children}
        </div>
    )
}

export default FlexColumn