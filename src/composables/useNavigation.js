// useNavigation.js
import { ref, onMounted, onUnmounted } from "vue";

export function useNavigation(navItems) {
  const activeSection = ref("");
  const isScrolled = ref(false);

  const updateActiveSection = () => {
    const sections = navItems.map((item) => item.id);

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = 200; // Adjust based on your header height

        if (rect.top <= offset && rect.bottom > offset) {
          activeSection.value = section;
          return;
        }
      }
    }
  };

  const checkHeaderScroll = () => {
    isScrolled.value = window.scrollY > 20;
  };

  onMounted(() => {
    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("scroll", checkHeaderScroll);
    checkHeaderScroll(); // Initial check
    updateActiveSection(); // Initial check
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", updateActiveSection);
    window.removeEventListener("scroll", checkHeaderScroll);
  });

  return {
    activeSection,
    isScrolled,
  };
}
