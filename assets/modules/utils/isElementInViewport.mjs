export default function isElementInViewport (el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) ||
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}