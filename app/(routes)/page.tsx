import { getBillboards } from "@/actions/get-billboards";
import { getProducts } from "@/actions/get-products";
import Billboard from "@/components/billiboard";
import ProductList from "@/components/product-list";
import { Container } from "@/components/ui/container";

export const revalidate = 0

export default async function Home() {
    const products = await getProducts({ isFeatured: true })
    const billboard = await getBillboards('0668408e-bbfe-46f4-a3b0-7cca1cc1350f')
    return <>
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard
                    data={billboard}
                />
                <div className="flex px-4 flex-col gap-y-8 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    </>
}