import { cn } from '@/lib/utils';
import type { FC } from 'react';
import { MouseEventHandler } from 'react'

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
    icon: React.ReactElement
    className: string
}

const IconButton: FC<IconButtonProps> = ({
    onClick,
    icon,
    className
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "rounded-full items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
                className
            )}
        >
            {icon}
        </button>
    );
}
export default IconButton;