function animateNuklearCircularProgress(element, duration = 400, delay = 0) {
  // Check animated
  if (element.dataset.animated === "true") return;
  element.dataset.animated = true;

  // Calculate animation data
  let target = element.style.getPropertyValue("--target");
  let initial = element.style.getPropertyValue("--percentage");
  if (target === "") target = 50;
  if (initial === "") initial = 0;

  let frameTimeout = duration / (target - initial);
  let percentage = initial;

  // Animate
  setTimeout(() => {
    let loop = setInterval(() => {
      if (percentage >= target) clearInterval(loop);
      element.style.setProperty("--percentage", percentage);
      percentage++;
    }, frameTimeout);
  }, delay);
}
