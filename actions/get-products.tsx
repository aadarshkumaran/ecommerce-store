import queryString from "query-string";

import { Product } from "@/types";

interface Query{
    categoryId?:string;
    sizeId?:string;
    colorId?:string;
    isFeatured?:boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

export const getProducts = async(query : Query) : Promise<Product[]> =>{
    const url = queryString.stringifyUrl({
        url:URL,
        query:{
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            colorId: query.colorId,
            isFeatured: query.isFeatured,
        },
    });

    const res = await fetch(url);
    return res.json();
}