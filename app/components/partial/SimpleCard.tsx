export type SimpleCardType = {
    header?: React.ReactNode,
    children?: React.ReactNode,
    footer?: React.ReactNode,
}

export default function SimpleCard({
    header,
    children,
    footer,
} : SimpleCardType)
{
    return (
        
        <div className="form personalInfo grid gap-4 border rounded-md drop-shadow-2xl bg-white p-4">
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