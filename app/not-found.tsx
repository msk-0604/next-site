import style from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={style.container}>
            <dl>
                <dt className={style.title}>ページが見つかりませんでした</dt>
                <dd className={style.text}>
                    あなたがアクセスしようとしたページは存在しません。
                    <br />
                    URLを再度ご確認ください。
                </dd>
            </dl>
        </div>
    );
}