import { FC, ReactNode } from "react";

type SetFlex = "inherit" | "initial" | "revert" | "revert-layer" | "unset"
type OrderType =  "inherit" | "initial" | "revert" | "revert-layer" | "unset"
type BasisType = "auto" | "max-content" | "min-content" | "fit-content" | "content" | OrderType
interface IFlexItemProps {
    children: ReactNode
    width?: number | string
    grow?: number | SetFlex
    shrink?: number | SetFlex
    margin?: number | string
    padding?: number | string
    basis?: number | BasisType
    order?: number | OrderType
}

const FlexItem:FC<IFlexItemProps> = (props) => {
    const {
        children,
        width,
        grow,
        margin = '5px',
        padding,
        shrink,
        basis = "auto",
        order
    } = props
    return (
        <div
            style={{
                width: width,
                margin: margin,
                padding: padding,
                flexGrow: grow,               
                flexShrink: shrink,
                flexBasis: basis,
                order: order,
            }}
        >
            {children}
        </div>
    )
}

export default FlexItem