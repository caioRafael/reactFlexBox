import { FC, ReactNode } from "react";

type AlignItens = "stretch" | "flex-start" | "flex-end" | "center" | "baseline"
type JustifyContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse'
interface IFlexRowProps{
    children: ReactNode
    width?: number | string
    height?: number | string
    background?: string
    wrap?: Wrap
    verticalAlign?: JustifyContent
    horizontalAlign?: AlignItens 
}


const FlexRow:FC<IFlexRowProps> = (props) => {
    const {
        children,
        width,
        height,
        background,
        wrap = 'wrap',
        verticalAlign,
        horizontalAlign
    } = props

    return (
        <div
        style={{
            display: "flex",
            flexDirection: "row",
            margin: '5px',
            padding: '5px',
            width: width,
            height: height,
            background: background,
            flexWrap: wrap,
            alignItems: horizontalAlign,
            justifyContent: verticalAlign
        }}
        >
            {children}
        </div>
    )
}

export default FlexRow