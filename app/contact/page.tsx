import style from "./page.module.css";
import ContactForm from "@/app/components/ContactForm";

export default function Page() { 
    return (
        <div className={style.container}>
            <p className={style.text}>
                ご質問、ご相談は下記フォームよりお問い合わせください。
                <br />
                内容確認後、担当者より通常３営業日以内にご連絡いたします。
            </p>
            <ContactForm />
        </div>
    );
}