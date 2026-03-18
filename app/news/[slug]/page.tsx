// import { notFound } from "next/navigation";
// import { getNewsDetail } from "@/app/_libs/microcms";
// import Article from "@/app/components/Article";
// import ButtonLink from "@/app/components/ButtonLink";
// import style from "./page.module.css";

// type Props = {
//   params: Promise<{
//     slug: string;
//   }>;
//   searchParams: Promise<{
//     dk?: string;
//   }>;
// };

// export default async function Page({ params, searchParams }: Props) {
//   const { slug } = await params;
//   const data = await getNewsDetail(slug).catch(notFound);

//   return (
//     <>
//       <Article data={data} />
//       <div className={style.footer}>
//         <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
//       </div>
//     </>
//   );
// }


import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/components/Article";
import ButtonLink from "@/app/components/ButtonLink";
import style from "./page.module.css";

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    dk?: string;
  }>;
};

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const { dk } = await searchParams;

  const data = await getNewsDetail(slug, {
    draftKey: dk,
  }).catch(notFound);

  return (
    <>
      <Article data={data} />
      <div className={style.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}



// type Props = {
//   params: Promise<{
//     slug: string;
//   }>;
//   searchParams: Promise<{
//     dk?: string;
//   }>;
//   searchParams: {
//     dk?: string;
//   };
// };

// export default async function Page({ params, searchParams }: Props) {
//   const { slug } = await params;
//   const { dk } = await searchParams;

//   const data = await getNewsDetail(slug, {
//     draftKey: searchParams.dk,
//   }).catch(notFound);

//   return (
//     <>
//       <Article data={data} />
//       <div className={style.footer}>
//         <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
//       </div>
//     </>
//   );
// }

