const scrollMovement = (ref, sectionName) => {
  // ref: DOM element. The element we must scroll to.
  // This object has a .top key which is the distance between the top of the element and the top of the user's browser
  const rect = ref.getBoundingClientRect();

  // We add this value to amount of pixels the user has scrolled vertically on their browser
  const topRelativeToPage = rect.top;

  // We get the coordinates of the element we want to scroll to
  window.scrollTo({
    top: ref.offsetTop,
    behavior: "smooth",
  });
};

export default scrollMovement;
