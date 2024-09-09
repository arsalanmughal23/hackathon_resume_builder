export const enum SimpleCardStyleEnum {
    DEFAULT = "default",
    STYLE1 = "style1",
    STYLE2 = "style2"
};

const SimpleCardStyles = {
    [SimpleCardStyleEnum.DEFAULT]: "",
    [SimpleCardStyleEnum.STYLE1]: "border rounded-md bg-white p-4 drop-shadow-md",
    [SimpleCardStyleEnum.STYLE2]: "border rounded-md bg-white p-4 drop-shadow-2xl",
}

export type SimpleCardType = {
    header?: React.ReactNode,
    children?: React.ReactNode,
    footer?: React.ReactNode,
    className?: string,
    style?: SimpleCardStyleEnum
}

export default function SimpleCard({
    className,
    style = SimpleCardStyleEnum.DEFAULT,
    header,
    children,
    footer,
} : SimpleCardType)
{
    className = `${SimpleCardStyles[style]} ${(className ?? '')}`;

    return (
        <div className={`form grid gap-4 ${className}`}>
            { header && 
                <div className="head border-b-2">
                    { header }
                </div>
            }

            <div className="body py-2">
                { children }
            </div>

            { footer && 
                <div className="foot border-t-2 pt-2">
                    { footer }
                </div>
            }
        </div>
    )
}