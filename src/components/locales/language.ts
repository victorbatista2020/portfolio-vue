import { ref } from "vue";

export type Language = "en" | "pt";

export const language = ref<Language>("en");