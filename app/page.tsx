import style from "./page.module.css";
import Image from "next/image";
import {getNewsList} from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/components";
import ButtonLink from "./components/ButtonLink";
import NewsList from "@/app/components/NewsList";



export default async function Home() {
  
    const data = await getNewsList({
      limit: TOP_NEWS_LIMIT,
    });

  return (
    <>
    <section className={style.top}>
       <div>
      <h1 className={style.title}>テクノロジーの力で世界を変える</h1>
      <p className={style.description}>
        私たちは市場をリードしているグローバルテックカンパニーです。
      </p>
    </div>
    <Image 
    className={style.bgimg} 
    src="/img-mv.jpg" 
    alt="" 
    width={4000}
    height={1200}/>
    </section>
    
  

  <section className={style.news}>
    <h2 className={style.newsTitle}>News</h2>
    <NewsList news={data.contents} />
     {/* <ul>
      {sliceData.map((article) => (
        <li key={article.id} className={style.list}>
          <div className={style.link}>
            <Image
            className={style.image}
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
            />
            <dl className={style.content}>
              <dt className={style.tag}>
                {article.title}
              </dt>
              <dd className={style.meta}>
                <span className={style.tag}>
                  {article.category.name}
                </span>
                <span className={style.date}>
                  <Image
                    src="/clock.svg"
                    alt=""
                    width={16}
                    height={16}
                    priority
                    />
                    {article.publishedAt}
                </span>
              </dd>
            </dl>
           </div>
           </li>
        ))}
   
   </ul>  */}
        <div className={style.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
   </section>
   </>
      );
    }
