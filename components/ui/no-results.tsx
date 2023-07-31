import type { FC } from 'react';

interface NoResultsProps { }

const NoResults: FC<NoResultsProps> = ({ }) => {
    return (
        <div className="flex items-center justify-center h-full w-full text-neutral">
            No results found
        </div>
    );
}
export default NoResults;