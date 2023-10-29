import { Billboard as BillboardType } from '@/types';
import Image from 'next/image';
import type { FC } from 'react';



interface BillboardProps {
    data: BillboardType

}

const Billboard: FC<BillboardProps> = ({ data }) => {

    return (
        <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
            <div
                style={{ backgroundImage: `url(${data && data?.imageUrl})` }}
                className='rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover'
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-primary">
                        {data && data.label}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Billboard;