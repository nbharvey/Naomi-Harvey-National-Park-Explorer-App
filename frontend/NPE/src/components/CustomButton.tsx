import React from 'react';
import { Button } from "@material-tailwind/react";


export function CustomButton({ className, children, ...rest }: React.ComponentProps<typeof Button>) {
    
    const defaultClasses = "middle none rounded-lg bg-mossGreen m-4 px-6 text-center align-middle font-bold text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";

    const combinedClassName = `${defaultClasses} ${className || ''}`.trim();

    return (
        <Button
            {...rest}
            className={combinedClassName}
            data-ripple-light="true"
        >
            {children}
        </Button>
    );
}