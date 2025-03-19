<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center">
        {{ t("contact.title") }}
      </h2>

      <div
        class="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden"
      >
        <div class="grid md:grid-cols-2">
          <div
            class="p-8 bg-gradient-to-br from-purple-600 to-blue-500 text-white"
          >
            <h3 class="text-2xl font-bold mb-6">
              {{ t("contact.get_in_touch") }}
            </h3>
            <p class="mb-6">{{ t("contact.description") }}</p>

            <div class="space-y-4">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>contact@web3dev.com</span>
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div class="mt-8">
              <h4 class="font-semibold mb-3">
                {{ t("contact.social_media") }}
              </h4>
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="text-white hover:text-gray-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
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
                  class="text-white hover:text-gray-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745-.074-.6-.074-.6.546.07 1.054.588 1.054.588 1.089.745 2.333.546 2.769.417.099-.745.354-1.416.645-1.726-2.84-.29-5.853-1.416-5.853-6.418 0-1.416.513-2.561 1.333-3.473-.099-.29-.513-1.587.099-3.473 0 0 1.089-.29 3.567 1.416 1.089-.29 2.178-.417 3.268-.417 1.089 0 2.178.29 3.268.417 2.478-1.706 3.567-1.416 3.567-1.416.645 1.886.258 3.183.129 3.473.82.912 1.333 2.057 1.333 3.473 0 4.974-3.013 6.128-5.853 6.418.354.29.645.887.645 1.726v2.979c0 .29.199.645.793.534 4.769-1.587 8.207-6.083 8.207-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="text-white hover:text-gray-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
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
          </div>

          <div class="p-8">
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {{ t("contact.form.name") }}
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {{ t("contact.form.email") }}
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>

              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {{ t("contact.form.message") }}
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-shadow"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">{{ t("contact.form.sending") }}</span>
                <span v-else>{{ t("contact.form.submit") }}</span>
              </button>

              <div
                v-if="formMessage"
                class="mt-4 p-3 rounded-md"
                :class="
                  formSuccess
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                "
              >
                {{ formMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useTranslations, getLangFromUrl } from "@/i18n/utils";

const lang = getLangFromUrl(new URL(window.location.href));
const t = useTranslations(lang);

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const formMessage = ref("");
const formSuccess = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  formMessage.value = "";

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Success simulation
  formSuccess.value = true;
  formMessage.value = t("contact.form.success");

  // Reset form
  formData.value = {
    name: "",
    email: "",
    message: "",
  };

  isSubmitting.value = false;
};
</script>
