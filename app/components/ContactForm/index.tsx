"use client";

import { createContactData } from "@/app/_actions/contact"; 
import { useActionState } from "react";
import style from "./index.module.css";

const initialState = {
    status: "",
    message: "",
};


export default function ContactForm() {
    const [state,formAction] =
    useActionState(createContactData, initialState);
    console.log(state);
    if(state.status==="success") {
        return (
            <p className={style.success}>
                お問い合わせありがとうございます。
                <br />
                お返事まで今しばらくお待ちください。
            </p>
        );
    }
    return (
        <form className={style.form} action={formAction}>
            <div className={style.horizontal}>
                <div className={style.item}>
                    <label className={style.label} htmlFor="lastname">
                        姓
                        </label>
                        <input className={style.textfield} type="text" id=
                        "lastname" name="lastname"/>
                    </div>
                    <div className={style.item}>
                        <label className={style.label} htmlFor="firstname">
                            名
                        </label>
                        <input className={style.textfield} type="text" id=
                        "firstname" name="firstname" />
                    </div>
                </div>
                <div className={style.item}>
                    <label className={style.label} htmlFor="company">
                        会社名
                    </label>
                     <input className={style.textfield} type="text" id=
                        "company" name="company" />
                </div>
                <div className={style.item}>
                    <label className={style.label} htmlFor="email">
                        メールアドレス
                    </label>
                     <input className={style.textfield} type="text" id=
                        "email" name="email" />
                </div>
                <div className={style.item}>
                    <label className={style.label} htmlFor="message">
                        メッセージ
                    </label>
                     <textarea className={style.textarea}  id="message"
                         name="message" />
                </div>
                <div className={style.actions}>
                    {state.status==="error" && (
                        <p className={style.error}>{state.message}</p>
                    )}
                     <input type="submit" value="送信する" className={style.button} />
            </div>
        </form>
    );
}