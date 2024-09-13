export type ButtonType = {
    type?: "button" | "submit" | "reset" | undefined,
    className?: string,
    onClick?: ()=>void,
    children?: React.ReactNode
}

export default function Button({
    type="button",
    className,
    onClick=()=>{},
    children,
} : ButtonType)
{
    return (
        <button 
            type={type}
            onClick={onClick}
            className={`${className} w-full border rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-primary-light focus:ring-primary-light focus:ring-1`} 
        >
            { children || 'Save' }
        </button>
    )
}