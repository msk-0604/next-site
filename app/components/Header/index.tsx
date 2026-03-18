import Image from "next/image";
import style from "./index.module.css";
import Link from "next/link";
import Menu from "../Menu";

export default function Header() {
    return (
        <header className={style.header}>
        <Link href="/" className={style.logoLink}>
        <Image
        src="/logo.svg"
        alt="SIMPLE"
        className={style.logo}
        width={348}
        height={133}
        priority
        />
        </Link>
        <Menu />
    </header>
    );
}