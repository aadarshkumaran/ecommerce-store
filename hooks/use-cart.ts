import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import toast from "react-hot-toast";

import { Product } from "@/types";

interface CartStore{
    items:Product[];
    addItem: (data : Product) => void;
    removeItem: (id: string)  => void;
    removeAll:() => void;
};

export const useCart = create(
    persist<CartStore>((set,get)=>({
        items:[],
        addItem: (data : Product) =>{
            const currentItems = get().items;
            const existingItem = currentItems.find((item)=>item.id === data.id);

            if(existingItem) return toast("The selected items are already in your cart!");
            
            set({items: [...get().items, data]});
            toast.success("Item Added to Cart");
        },
        removeItem: (id: string)  =>{
            set({items :[...get().items.filter((item)=> item.id !== id)]})
            toast.success("Item removed from the cart")
        },
        removeAll:() => set({items : []}),
    }),{
        name:'cart-storage',
        storage: createJSONStorage(()=> localStorage)
    })
)