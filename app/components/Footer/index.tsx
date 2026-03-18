import style from "./index.module.css";

export default function Footer() {
    return (
        <footer className={style.footer}>
            <nav className={style.nav}>
                <ul className={style.items}>
                    <li className={style.item}>
                        <a href="/news">ニュース</a>
                    </li>
                    <li className={style.item}>
                        <a href="/menbers">メンバー</a>
                    </li>
                    <li className={style.item}>
                        <a href="/contact">お問い合わせ</a>
                    </li>
                </ul>
            </nav>
            <p className={style.cr}>© SIMPLE. ALL Rights Reserved 2026</p>
        </footer>
    )
}