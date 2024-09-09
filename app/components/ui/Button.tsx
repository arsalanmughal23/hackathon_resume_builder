export type ButtonType = {
    type?: "button" | "submit" | "reset" | undefined,
    className?: string,
    children?: React.ReactNode
}

export default function Button({
    type="button",
    className,
    children
} : ButtonType)
{
    return (
        <button 
            type={type}
            className={`${className} w-full border rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-primary-light focus:ring-primary-light focus:ring-1`} 
        >
            { children || 'Save' }
        </button>
    )
}