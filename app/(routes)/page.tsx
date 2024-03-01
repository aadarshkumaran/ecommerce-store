import { getBillboards } from "@/actions/get-billboards";
import Billboard from "@/components/billiboard";
import { Container } from "@/components/ui/container";

export const revalidate = 0

export default async function Home(){
    const billboard = await getBillboards('0668408e-bbfe-46f4-a3b0-7cca1cc1350f')
    return<>
    <Container>
        <div className="space-y-10 pb-10">
            <Billboard
            data={billboard}
            />
        </div>
    </Container>
    </>
}