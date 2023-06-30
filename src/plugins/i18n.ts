import { createI18n } from "vue-i18n";
import vi from "@/locales/vi.json"

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    localePath: "locales",
    locale: "vi",
    fallbackLocale: "vi",
    messages: {
        vi,
    }
})

export default i18n;
