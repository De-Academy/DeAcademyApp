import React, { ButtonHTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}


export default function Button({ children, ...props } : ButtonProps) {
    return <button {...props} className="text-center bg-clip-padding p-4 min-w-32 bg-gradient-to-r from-purple-800  to-sky-600 rounded-full  hover:bg-violet-700 hover:">
    {children} 
    </button>;
}

