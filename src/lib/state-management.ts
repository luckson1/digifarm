import { create } from "zustand";




export interface Store {
  auth:boolean;
form: "Biz" | "Login" | "Farmer" ;
product?: {
    name: string,
        id: number,
        price: number,
        description: string,
        imageUrl: string
}
 
}

interface Action {

  login: () => void;
  logout: () => void;
  setBizForm: () =>void,
  setFarmerForm: () => void,
  setLoginForm: () => void,
  setProduct: (product: {name: string,
    id: number,
    price: number,
    description: string,
    imageUrl: string})=> void
  
}
const useStore = create<Store & Action>((set) => ({
  auth: false,
  form: "Biz",
  product: undefined,
  setProduct:(product)=> set({product:  product}),
   login: () => set({ auth:true }),
  logout: () => set({ auth: false}),

  setLoginForm: () => set({ form: "Login" }),
  setBizForm: () => set({ form: "Biz" }),
  setFarmerForm: () => set({ form: "Farmer" }),
}));

export default useStore;
