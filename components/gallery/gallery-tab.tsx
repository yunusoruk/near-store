"use client"

import { Image as ImageType } from '@/types';
import type { FC } from 'react';

import { Tab } from '@headlessui/react';
import NextImage from 'next/image';
import { cn } from '@/lib/utils';


interface GalleryTabProps {
        image: ImageType
}

const GalleryTab: FC<GalleryTabProps> = ({
        image
}) => {
        return (
                <Tab className='relative aspect-square flex cursor-pointer items-center justify-center rounded-md bg-background' >
                        {({ selected }) => (
                                <div className="">
                                        <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md' >
                                                <NextImage
                                                        fill
                                                        src={image.url}
                                                        alt=''
                                                        className='object-cover object-center'
                                                />
                                        </span>
                                        <span className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2",
                                                selected ? "ring-black" : "ring-transparent"
                                        )} />
                                </div>
                        )}
                </Tab>
        );
}
export default GalleryTab;