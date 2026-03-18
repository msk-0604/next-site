// import { NEWS_LIST_LIMIT } from "@/app/components";
// import Link from "next/link";
// import style from "./index.module.css";

// type Props = {
//     totalCount: number;
//     current?: number;
// };

// export default function Pagination({totalCount, current = 1}:Props) {
//     const pages = Array.from (
//         {length:Math.ceil(totalCount / NEWS_LIST_LIMIT) },
//         (_, i) => i + 1
//     )

//     return (
//         <nav>
//             <ul className={style.container}>
//                 {pages.map((p) => (
//                     <li className={style.list} key={p}>

//                     {current !=== p ? (
//                         <Link href={`/news/p/${p}`} className={style.item}>
//                             {p}
//                         </Link>
//                     )}
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// }

import { NEWS_LIST_LIMIT } from "@/app/components";
import Link from "next/link";
import style from "./index.module.css";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({ 
    totalCount, 
    current = 1,
    basePath = "/news",
 }: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );

  return (
    <nav>
      <ul className={style.container}>

        {pages.map((p) => (
          <li className={style.list} key={p}>
            {current !== p ? (
              <Link href={`${basePath}/p/${p}`} className={style.item}>
                {p}
              </Link>
            ) : (
              <span className={`${style.item} ${style.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}