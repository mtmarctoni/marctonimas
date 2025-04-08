export function isTablet() {
  if (typeof window === 'undefined') {
    return false;
  }
  
  // Check screen size for tablet
  const width = window.innerWidth;
  return width >= 768 && width <= 1024;
}

export function isTouchDevice() {
  if (typeof window === 'undefined') {
    return false;
  }
  
  // Check for touch support
  return 'ontouchstart' in window || 
         navigator.maxTouchPoints > 0 || 
         navigator.msMaxTouchPoints > 0;
}
