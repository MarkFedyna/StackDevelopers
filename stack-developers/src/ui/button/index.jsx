import './button.style.css'

export default function Button ({children, ...props}) {
    return (
        <button className={'rounded-full px-1.5 py-1 text-white'} {...props} >{children}</button>
    )
}