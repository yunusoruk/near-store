"use client"

import Button from '@/components/ui/button';
import IconButton from '@/components/ui/iconButton';
import { Color, Size } from '@/types';
import { Dialog } from '@headlessui/react';
import { Plus, X } from 'lucide-react';
import { useState, type FC } from 'react';
import Filter from './filter';

interface MobileFiltersProps {
    colors: Color[]
    sizes: Size[]
}

const MobileFilters: FC<MobileFiltersProps> = ({
    colors,
    sizes
}) => {

    const [open, setOpen] = useState(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

    return (
        <>
            <Button onClick={onOpen} className='flex gap-x-2 items-center lg:hidden'>
                Filters
                <Plus size={20} />
            </Button>

            <Dialog open={open} as='div' className="relative z-40 lg:hidden " onClose={onClose} >
                {/* Background */}
                <div className='fixed inset-0 bg-black bg-opacity-25'>
                    <div className="fixed inset-0 z-40 flex">
                        <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto shadow-xl bg-white py-4 pb-6">
                            {/* Close Button */}
                            <div className="flex items-center justify-end px-4">
                                <IconButton
                                    onClick={onClose}
                                    icon={<X size={15} />}
                                    className=''
                                />
                            </div>
                            <div className="p-4">
                                <Filter
                                    valueKey="sizeId"
                                    name="Sizes"
                                    data={sizes}
                                />
                                <Filter
                                    valueKey="colorId"
                                    name="Colors"
                                    data={colors}
                                />
                            </div>

                        </Dialog.Panel>
                    </div>

                </div>

            </Dialog>
        </>
    );
}
export default MobileFilters;