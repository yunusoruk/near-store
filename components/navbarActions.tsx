"use client"

import type { FC } from 'react';
import { useEffect, useState } from 'react'
import Button from './ui/button';
import { ShoppingBag } from 'lucide-react';
import useCart from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';


interface NavbarActionsProps { }

const NavbarActions: FC<NavbarActionsProps> = ({ }) => {

    const router = useRouter()

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const cart = useCart()

    if (!isMounted) {
        return null
    }

    return (
        <div className='ml-auto flex items-center gap-x-4'>
            <Button onClick={() => router.push("/cart")} className='flex items-center rounded-full bg-neutral-white px-4 py-2' >
                <ShoppingBag
                    size={24}
                    color='black'

                />
                <span className='text-neutral-500 ml-2 text-md font-bold mt-0.5'>
                    {cart.items.length}
                </span>
            </Button>

        </div>
    );
}
export default NavbarActions;