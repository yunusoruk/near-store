import getSizes from '@/actions/getSizes';
import FilterBox from './filter-box';
import getColors from '@/actions/getColors';

const FilterBar = async ({

}) => {

    const sizes = await getSizes()
    const colors = await getColors()

    return (

        <div className='flex flex-row pb-4 space-x-4'>
            <FilterBox
                data={sizes}
                name="size"
                valueKey='sizeId'
            />
            <FilterBox
                data={colors}
                name="color"
                valueKey='colorId'
            />

        </div>
    );
}
export default FilterBar;