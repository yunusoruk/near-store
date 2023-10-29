import getBillboard from "@/actions/getBillboard"
import getProducts from "@/actions/getProducts"
import Billboard from "@/components/billboard"
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"

export const revalidate = 0

const HomePage = async () => {

    const products = await getProducts({ isFeatured: true })

    return (
        <div className="container space-y-10 pb-10">
            <PageHeader className="pb-8">
                <PageHeaderHeading>Find things you&apos;ll love.</PageHeaderHeading>
                <PageHeaderDescription>
                    Welcome to Near Store, where style meets convenience, and shopping becomes an extraordinary experience.
                </PageHeaderDescription>
            </PageHeader>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList items={products} title="Featured products" />
            </div>
        </div>

    )

}

export default HomePage