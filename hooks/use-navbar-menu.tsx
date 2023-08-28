import { create } from 'zustand'

import { Product } from '@/types'

type DataType = {
        href: string;
        label: string;
    }
interface PreviewModalStore {
    isOpen: boolean,
    data?: DataType[],
    onOpen: (data:DataType[]) => void
    onClose: () => void
}

const useNavbarMenu= create<PreviewModalStore> ((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: DataType[]) => set({isOpen: true, data}),
    onClose: () => set({isOpen:false})

}))

export default useNavbarMenu