import getBillboard from "@/actions/getBillboard"
import getProducts from "@/actions/getProducts"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"

export const revalidate = 0

const HomePage = async () => {

    const products = await getProducts({ isFeatured: true })

    const billboard = await getBillboard("ddc2923b-f2e2-4973-9acc-314a6abd4c2f")


    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard
                    data={billboard}
                />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList items={products} title="Featured products" />
                </div>
            </div>

        </Container>
    )

}

export default HomePage