<script setup>
import { ref } from "vue";
import { useTranslations, getLangFromUrl } from "@/i18n/utils";

const currentLang = ref(getLangFromUrl(new URL(window.location.href)));
const t = useTranslations(currentLang.value);

const toggleLanguage = () => {
  const newLang = currentLang.value === "en" ? "es" : "en";
  window.location.href = newLang === "en" ? "/" : "/es/";
};
</script>

<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="relative w-8 h-8">
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              ></div>
              <div
                class="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center"
              >
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-bold"
                  >W3</span
                >
              </div>
            </div>
            <span class="text-xl font-bold">{{ t("nav.name") }}</span>
          </div>
          <p class="text-gray-400 mb-4">{{ t("footer.description") }}</p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745-.074-.6-.074-.6.546.07 1.054.588 1.054.588 1.089.745 2.333.546 2.769.417.099-.745.354-1.416.645-1.726-2.84-.29-5.853-1.416-5.853-6.418 0-1.416.513-2.561 1.333-3.473-.099-.29-.513-1.587.099-3.473 0 0 1.089-.29 3.567 1.416 1.089-.29 2.178-.417 3.268-.417 1.089 0 2.178.29 3.268.417 2.478-1.706 3.567-1.416 3.567-1.416.645 1.886.258 3.183.129 3.473.82.912 1.333 2.057 1.333 3.473 0 4.974-3.013 6.128-5.853 6.418.354.29.645.887.645 1.726v2.979c0 .29.199.645.793.534 4.769-1.587 8.207-6.083 8.207-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">{{ t("footer.links") }}</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#about"
                class="text-gray-400 hover:text-white transition-colors"
                >{{ t("nav.about") }}</a
              >
            </li>
            <li>
              <a
                href="#skills"
                class="text-gray-400 hover:text-white transition-colors"
                >{{ t("nav.skills") }}</a
              >
            </li>
            <li>
              <a
                href="#projects"
                class="text-gray-400 hover:text-white transition-colors"
                >{{ t("nav.projects") }}</a
              >
            </li>
            <li>
              <a
                href="#background"
                class="text-gray-400 hover:text-white transition-colors"
                >{{ t("nav.background") }}</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="text-gray-400 hover:text-white transition-colors"
                >{{ t("nav.contact") }}</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">
            {{ t("footer.resources") }}
          </h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >{{ t("footer.blog") }}</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >{{ t("footer.tutorials") }}</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >{{ t("footer.docs") }}</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >{{ t("footer.newsletter") }}</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">{{ t("footer.legal") }}</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >{{ t("footer.privacy") }}</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >{{ t("footer.terms") }}</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >{{ t("footer.cookies") }}</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-gray-500 text-sm">
          &copy; {{ new Date().getFullYear() }} {{ t("nav.name") }}.
          {{ t("footer.copyright") }}
        </p>
        <div class="mt-4 md:mt-0 flex items-center">
          <button
            @click="toggleLanguage"
            class="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
          >
            <span class="mr-2">{{ currentLang === "en" ? "🇺🇸" : "🇪🇸" }}</span>
            {{ currentLang === "en" ? "English" : "Español" }}
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>