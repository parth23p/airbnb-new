import {create} from 'zustand';
// zustand is state management store
interface RentModalStore{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}


const useRentModal=create<RentModalStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),
}));

export default useRentModal;