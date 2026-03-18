import { notFound } from "next/navigation";
import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/components/NewsList";
import Pagination from "@/app/components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/components";


type Props = {
  params: Promise<{
    current: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { current: currentParam } = await params;
  const current = parseInt(currentParam, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
    <NewsList news={news} />
   <Pagination totalCount={totalCount} current={current} />
    </>
  );
}