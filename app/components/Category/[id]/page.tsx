import {getCategoryDetail, getNewsList} from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import NewsList from "@/app/components/NewsList";
import Category from "@/app/components/Category";

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({params}:Props) {
    const category = await getCategoryDetail(params.id).catch(notFound);
    
    const {contents: news} = await getNewsList({
        filters: `category[equals]${category.id}`,
    })

    return (
        <>
        <p>
            <Category category={category}/>
        </p>
        <NewsList news={news}/>
        </>
    );
}