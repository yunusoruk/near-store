"use client"

import Currency from '@/components/ui/currency';
import IconButton from '@/components/ui/iconButton';
import useCart from '@/hooks/use-cart';
import { Product } from '@/types';
import { X } from 'lucide-react';
import Image from 'next/image';
import type { FC } from 'react';

interface CartItemProps {
    data: Product
}
const CartItem: FC<CartItemProps> = ({ data }) => {

    const cart = useCart()

    const onRemove = () => {
        cart.removeItem(data.id)
    }

    return (
        <li className='flex py-6 border-b'>
            <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48' >
                <Image
                    src={data.images[0].url}
                    alt=''
                    fill
                    className='object-cover object-center'
                />
                {data.name}
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton icon={<X />} onClick={onRemove} className='' />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className='text-lg font-semibold '>{data.name}</p>
                    </div>
                    <div className="mt-1 flex text-sm">
                        <p className='text-muted-foreground'>{data.color.name}</p>
                        <p className='text-muted-foreground ml-4 border-l border-primary-foreground pl-4'>{data.size.name}</p>
                    </div>
                    <Currency value={data.price} />

                </div>
            </div>
        </li>
    );
}
export default CartItem;