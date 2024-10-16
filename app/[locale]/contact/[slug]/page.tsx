import { useTranslations } from "next-intl";

export default function ContactDetailPage({ params }: { params: { locale: string; slug: string } }) {
  const t = useTranslations("ContactPage");
  const { slug } = params;

  return (
    <div>
      <h1>{t("contactDetailTitle", { slug })}</h1>
      <p>This is the contact detail page for: {slug}</p>
    </div>
  );
}