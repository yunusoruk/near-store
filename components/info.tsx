"use client"

import { Product } from '@/types';
import type { FC, MouseEventHandler } from 'react';
import Currency from './ui/currency';
import { ShoppingBagIcon } from 'lucide-react';
import useCart from '@/hooks/use-cart';
import { Button } from './ui/button';

interface InfoProps {
    data: Product
}

const Info: FC<InfoProps> = ({
    data
}) => {

    const cart = useCart()


    const onAddCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        cart.addItem(data)
    }

    return (
        <div>
            <h1 className='text-3xl font-bold '>
                {data.name}
            </h1>
            <div className="mt-3 flex items-end justiy-between">
                <p className='text-xl '>
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className='my-4' />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className='font-semibold '>
                        {data?.size?.name}
                    </h3>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="h-6 w-6 rounded-full border border-secondary"
                        style={{ backgroundColor: data?.color?.value }}
                    >

                    </div>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">

                <Button variant='secondary' onClick={onAddCart} >
                    <div className="flex flex-row space-x-2">
                        <p className='font-semibold'>
                            Add To Cart
                        </p>
                        <ShoppingBagIcon size={20} />
                    </div>
                </Button>
            </div>
        </div>
    );
}
export default Info;
