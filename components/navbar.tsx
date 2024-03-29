import Link from "next/link";

import { Container } from "@/components/ui/container";
import { MainNavbar } from "@/components/MainNavbar";
import { getCategories } from "@/actions/get-categories";
import NavbarActions from "@/components/ui/navbar-actions";
import logo from '@/public/preview.png'
import Image from "next/image";

//the browser never gets cached which overcomes hard refreshing the browser
export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories()
    return <>
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl"><Image src={logo} alt="Greenja"/></p>
                    </Link>
                    <MainNavbar data={categories} />
                    <NavbarActions/>
                </div>
            </Container>
        </div>
    </>
}

export default Navbar;