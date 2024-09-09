export type InputGroupType = {
    icon?: React.ReactNode,
    error?: string,
    children: React.ReactNode,
}

export default function InputGroup({
    icon,
    error,
    children,
} : InputGroupType)
{
    return (
        <label className="relative block">
            <span className="absolute inset-y-0 left-0 w-full flex items-center pl-2">
                <div className="icon">
                    { icon }
                </div>

                { error && 
                    <div className="text-sm bg-white text-red-500 -top-5 relative p-1">{ error }</div> 
                }
            </span>

            { children }
        </label>
    )
}