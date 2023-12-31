import getCategory from '@/actions/getCategory';
import getColors from '@/actions/getColors';
import getProducts from '@/actions/getProducts';
import getSizes from '@/actions/getSizes';
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';
import type { FC } from 'react';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/productCard';
import FilterBar from './components/filter-bar';

export const revalidate = 0

interface CategoryPageProps {
    params: {
        categoryId: string
    },
    searchParams: {
        colorId: string,
        sizeId: string
    }
}

const CategoryPage: FC<CategoryPageProps> = async ({ params, searchParams }) => {

    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })

    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategory(params.categoryId)



    return (
        <div className='container'>
            <Billboard
                data={category && category.billboard}
            />
            <div className="px-4 sm:px-6 lg:px-8 pb-24">
                <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">

                    {/* <MobileFilters sizes={sizes} colors={colors} /> */}

                    {/* <div className="hidden lg:block lg:col-span-5">
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
                    </div> */}
                    <FilterBar />
                    <div className="mt-6 lg:col-span-5 lg:mt-0">
                        {products.length === 0 && <NoResults />}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {products.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    data={item}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CategoryPage;