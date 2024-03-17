import { Category } from '@/commonTypes/commonTypes';
export interface Dua {
    id: number
    dua_name: string;
    dua_description: string;
    reference: string;
    dua: string;
    audio_url: string;
    category: string
}

export default interface Category {
    id: number,
    cat_name_bn: string,
    cat_name_en: string,
    no_of_subcat: number,
    no_of_dua: number,
    cat_icon: string,
    sub_category: Record<string, Dua[]>
}