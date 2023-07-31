import getCategory from '@/actions/getCategory';
import getColors from '@/actions/getColors';
import getProducts from '@/actions/getProducts';
import getSizes from '@/actions/getSizes';
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';
import type { FC } from 'react';

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

    console.log(category);


    return (
        <div className='bg-white'>
            <Container>
                {/* <Billboard
                    data=""
                /> */}
            </Container>
        </div>
    );
}
export default CategoryPage;