"use client"

import { Product } from '@/types';
import Image from 'next/image';
import type { FC, MouseEventHandler } from 'react';
import IconButton from './iconButton';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from './currency';
import { useRouter } from 'next/navigation';
import usePreviewModal from '@/hooks/use-preview-modal';
import useCart from '@/hooks/use-cart';
import { Button } from './button';

interface ProductCardProps {
    data: Product
}

const ProductCard: FC<ProductCardProps> = ({
    data
}) => {

    const router = useRouter()
    const previewModal = usePreviewModal()
    const cart = useCart()

    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()

        previewModal.onOpen(data)
    }

    const onAddCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()

        cart.addItem(data)
    }

    return (
        <div onClick={handleClick} className='bg-card shadow-sm  group cursor-pointer  space-y-4 border rounded-lg'>
            {/* IMAGES & ACTIONS */}
            <div className="aspect-square rounded-xl relative">
                <Image
                    alt='Product Image'
                    src={data?.images?.[0].url}
                    fill
                    className='aspect-square object-cover rounded-t-lg'
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-6">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className='text-muted-foreground' />}
                            className=''
                        />
                        <IconButton
                            onClick={onAddCart}
                            icon={<ShoppingCart size={20} className='text-muted-foreground' />}
                            className=''
                        />

                    </div>
                </div>
            </div>
            {/* DESCRIPTION */}
            <div className='px-2'>
                <p className='font-semibold text-lg'>
                    {data.name}
                </p>
                <p className='text-sm text-muted-foreground'>
                    {data.category?.name}
                </p>
            </div>
            {/* PRICE */}
            <div className="flex items-center justify-between px-2 pb-4">
                <Currency
                    value={data.price}
                />
            </div>
        </div>
    );
}
export default ProductCard;