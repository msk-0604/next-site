import Hero from "@/app/components/Hero";
import Sheet from "@/app/components/Sheet";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({children}: Props) {
    return (
        <>
        <Hero title="Contact" sub="お問い合わせ" />
        <Sheet>{children}</Sheet>
        </>
    );
}