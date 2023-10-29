import type { FC } from 'react';
import { ModeToggle } from './mode-toggle';
import { siteConfig } from '@/config/site';

interface FooterProps { }

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <footer className='bg-background '>
            <div className="flex flex-row justify-between py-6 container p-4 items-center">
                <p className='uppercase text-xl font-semibold'>
                    {`${siteConfig.name} STORE`}
                </p>
                <p className='text-center text-xs'>
                    &copy; 2023 NEAR, Inc. All rights reserved.
                </p>
                <ModeToggle />
            </div>

        </footer>
    );
}
export default Footer;