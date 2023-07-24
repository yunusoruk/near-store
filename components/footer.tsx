import type { FC } from 'react';

interface FooterProps { }

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <footer className='bg-white border-t'>
            <div className="mx-auto py-10">
                <p className='text-center text-xs text-black'>
                    &copy; 2023 StoreName, Inc. All rights reserved.
                </p>
            </div>

        </footer>
    );
}
export default Footer;