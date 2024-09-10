export type InputTextType = {
    name: string,
    value?: string,
    type?: string,
    className?: string,
    placeholder?: string,
    onChange?: (username: string) => void,
}

export default function InputText({
    name,
    type="text",
    value,
    className,
    placeholder,
    onChange
} : InputTextType)
{
    return (
        <input 
            name={name}
            type={type}
            value={value}
            className={`${className} w-full border rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-primary-light focus:ring-primary-light focus:ring-1`} 
            placeholder={placeholder}
            onChange={(e) => onChange?.(e.target.value)}
        />
    )
}