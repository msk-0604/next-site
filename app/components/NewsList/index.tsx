import Image from "next/image";
import style from "./index.module.css";
import { News } from "@/app/_libs/microcms";
import Category from "../Category";
import Date from "../Date";
import Link from "next/link";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }

  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={style.list}>
          <Link href={`/news/${article.id}`} className={style.link}>

            {article.thumbnail ? (
              <Image
                src={article.thumbnail.url}
                alt=""
                className={style.image}
                width={article.thumbnail.width}
                height={article.thumbnail.height}
              />
            ) : (
              <Image
                src="/no-image.png"
                alt="No Image"
                className={style.image}
                width={1200}
                height={630}
              />
            )}

            <dl className={style.content}>
              <dt className={style.title}>{article.title}</dt>
              <dd className={style.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>

          </Link>
        </li>
      ))}
    </ul>
  );
}