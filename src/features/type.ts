export type Product={
    id:number;
    title:string,
    price:number,
    description:string;
    category:Category
    categoryId:number
    images:string[];
}

export type Category = {
    id:number
    name:string
    image:string[]
}

