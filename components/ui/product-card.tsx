'use client'

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { usePreviewModal } from "@/hooks/use-preview-modal";

interface ProductCard {
    data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
    const router = useRouter();
    const previewModal = usePreviewModal()

    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        previewModal.onOpen(data);
    };


    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image src={data?.images?.[0]?.url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <div onClick={onPreview}>
                            <IconButton icon={<Expand size={20} className="text-gray-600" />}
                            />
                        </div>
                        <div onClick={() => { }}>
                            <IconButton
                                icon={<ShoppingCart size={20} className="text-gray-600" />}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* description */}
            <div>
                <p className="font-semibold text-lg">{data.name}</p>
                <p className="text-sm text-gray-500">{data.category?.name}</p>
            </div>
            {/* Price */}
            <Currency value={data?.price} />
        </div>
    );
}

export default ProductCard;